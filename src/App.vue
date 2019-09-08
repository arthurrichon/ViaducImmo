<template>
  <div>
    <main>
      <Header />
      <router-view @hasModalOpened="toggleOverflowClass($event)"/>
      <Footer />
    </main>
  </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

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
        getXml () {
          let xml = require('../static/data/base.xml')
          this.annonces = xml.biens.bien
        },
        toggleOverflowClass (val) {
          let e = document.getElementById('body')
          console.log(e)
          if (val) {
            e.classList.add('active')
            console.log(e)
          } else {
            e.classList.remove('active')
          }
        }
      },
      mounted () {
        this.annonces = this.$ads
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
</style>
