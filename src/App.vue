<template>
  <div>
    <main>
      <Header />
      <router-view/>
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
