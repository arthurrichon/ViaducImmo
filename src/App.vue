<template>
  <div>
    <main>
      <Header />
      <router-view/>
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
          annonces: []
        }
      },
      methods: {
        getXml () {
          let xml = require('../static/base.xml')
          this.annonces = xml.biens.bien
        }
      },
      mounted () {
        this.getXml()
      }
    }
</script>


<style>
    body {
        margin: 0;
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
</style>
