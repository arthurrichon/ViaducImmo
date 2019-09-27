<template>
  <div>
    <main>
      <Header />
      <router-view @hasModalOpened="toggleOverflowClass($event)" :ads="annonces"/>
      <Footer />
    </main>
  </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import axios from 'axios'

    export default {
      name: 'App',
      components: {
        Header,
        Footer
      },
      data () {
        return {
          annonces: [],
          hasModalOpened: false
        }
      },
      methods: {
        toggleOverflowClass (val) {
          let e = document.getElementById('body')
          console.log(e)
          if (val) {
            e.classList.add('active')
            console.log(e)
          } else {
            e.classList.remove('active')
          }
        },
        getXml () {
          // http://localhost:8081/static/data/base-2.xml
          // http://agenceviaduc.fr/static/data/base-2.xml
          let that = this
          let parseString = require('xml2js').parseString
          // let ads = axios.get('http://localhost:8081/static/data/base.xml').then((res) => {
          let ads = axios.get('http://agenceviaduc.fr/static/data/base.xml').then((res) => {
            // this.annonces = res.data.biens.bien
            // console.log({res})
            parseString(res.data, function (err, response) {
              let modifiedRes = response.biens.bien.map((ad) => {
                if (ad.images[0].image_princ_min[0]) {
                  ad.images[0].image_princ_min[0] = ad.images[0].image_princ_min[0].replace('PhotoPrincMin', 'Photo')
                  return ad
                }
              })

              that.annonces = modifiedRes

              // console.log(that.annonces)
            })
          }, (err) => {
            // console.log(err)
            return false
          })
        }
      },
      created () {
        // console.log(this.$ads)
        // this.annonces = this.$ads
        this.getXml()
      }
    }
</script>


<style>
    body {
      margin: 0;
    }
    body.active {
      overflow: hidden;
    }
    @font-face {
      font-family: "Karla";
      src: url("/fonts/KARLA-REGULAR.ttf") format("ttf"),
    }
    @font-face {
      font-family: "Rubik";
      src: url("/fonts/RUBIK-REGULAR.ttf") format("ttf"),
    }
    @font-face {
      font-family: "Gotham";
      src: url("/fonts/GOTHAMMEDIUM.ttf") format("ttf"),
    }

    main {
      padding-top: 150px;
    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
      main {
        padding-top: 70px;
      }
    }

    .clickable {
      cursor: pointer;
    }
</style>
