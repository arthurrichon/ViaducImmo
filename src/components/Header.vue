<template>
  <header>
    <div class="header-wrapper desktop">
      <div class="menu-wrapper">
        <img src="../assets/logositeSVG.svg" alt="" v-on:click="goToHome()">
        <ul class="menu">
          <li v-for="item in menuContent" :class="[item.path === $route.name ? 'active' : '']">
            <router-link :to="{ name: item.path, params: {} }">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>

      <div class="contact-wrapper">
        <div class="phone-wrapper">
          <img src="../assets/call.svg" alt="">
          <span>{{ phoneNumber }}</span>
        </div>
        <a class="button" href="#contact">Contact</a>
      </div>
    </div>
    <Slide class="mobile">
      <router-link :to="{ name: 'HomePage', params: {} }"><span>Accueil</span></router-link>
      <router-link v-for="item in menuContent" :to="{ name: item.path, params: {} }"><span>{{ item.name }}</span></router-link>
      <!-- <a id="home" href="#">
        <span>Home</span>
      </a> -->
      <div class="desktop phone-number">{{ phoneNumber }}</div>
      <a href="tel:0243491763" class="mobile phone-number">{{ phoneNumber }}</a>
    </Slide>
  </header>
</template>

<script>
  import { Slide } from 'vue-burger-menu'
  export default {
    name: 'Header',
    components: {
      Slide
    },
    data: () => {
      return ({
        menuContent: [
          { name: 'Acheter', path: 'BuyPage' },
          { name: 'Louer', path: 'RentPage' },
          { name: 'Vendre', path: 'SellPage' },
          { name: 'Agence', path: 'AgencePage' }
        ],
        phoneNumber: '02 43 49 17 63'
      });
    },
    methods: {
      goToHome () {
        // { name: 'Acheter', path: '/buy' },
        // { name: 'Louer', path: '/buy' },
        this.$router.push('/')
      }
    },
    watch: {
      '$route.name': function (c, o) {

      }
    }
  }
</script>

<style>
  header {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 9999;
  }
  .header-wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .menu-wrapper img {
    height: 35px;
    cursor: pointer;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0;
    margin: 0;
    margin-left: 30px;
  }

  .menu li {
    margin: 10px;
    list-style: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid #3FD1FF;
    background-color: #3FD1FF;
    transition: ease all 0.2s;
  }

  .menu li a {
    transition: ease all 0.2s;
    color: #FFF;
    font-size: 16px;
    text-decoration: none;
  }

  .menu li.active {
    background-color: white;
  }

  .menu li.active a {
    color: #3FD1FF;
  }

  .menu li:hover {
    background-color: #3fd1ffc7;
    transition: ease all 0.2s;
  }

  .menu li a:hover {
    color: #FFF;
    transition: ease all 0.2s;
  }

  .contact-wrapper {
    display: flex;
    align-items: center;
  }

  .phone-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .phone-wrapper span {
    margin-left: 8px;
    font-family: 'Rubik';
    font-weight: bold;
    min-width: 120px;
  }

  .button {
    padding: 10px 15px;
    background-color: #FF8317;
    border-radius: 20px;
    color: #FFF;
    margin-left: 10px;
    text-decoration: none;
  }

  .mobile {
    display: none;
  }

  .bm-burger-button {
    left: 30px;
    top: 30px;
  }

  .bm-menu {
    background-color: #F4FCFF !important;
    height: 100vh;
    box-sizing: border-box;
  }

  .bm-item-list a span {
    color: #222;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }

    .phone-number {
      text-decoration: none;
    }

    header {
      padding: 0;
      min-height: 90px;
      background-color: white;
    }


    .phone-number {
      position: absolute;
      bottom: 20px;
      color: #FF8317;
      font-size: 30px;
    }

    a.phone-number {
      text-decoration: none;
    }

    a.phone-number:visited {
      color: #FF8317;
      text-decoration: none;
    }
  }
</style>
