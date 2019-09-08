i<template>
  <header>
    <div class="header-wrapper desktop">
      <div class="menu-wrapper">
        <img src="../assets/logositeSVG.svg" alt="" v-on:click="goToHome()">
        <ul class="menu">
          <li v-for="item in menuContent">
            <router-link :to="{ name: item.path, params: {} }">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>

      <div class="contact-wrapper">
        <div class="phone-wrapper">
          <img src="../assets/call.svg" alt="">
          <span>02 43 49 17 63</span>
        </div>
        <a class="button" href="#contact">Contact</a>
      </div>
    </div>
    <Slide class="mobile">
      <router-link :to="{ name: 'HomePage', params: {} }"><span>Home</span></router-link>
      <router-link v-for="item in menuContent" :to="{ name: item.path, params: {} }"><span>{{ item.name }}</span></router-link>
      <!-- <a id="home" href="#">
        <span>Home</span>
      </a> -->
      <div class="desktop phone-number">02 43 49 17 63</div>
      <a href="tel:0243491763"class="mobile phone-number">02 43 49 17 63</a>
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
          { name: 'Achat', path: 'BuyPage' },
          { name: 'Location', path: 'RentPage' },
          { name: 'Confier votre bien', path: 'SellPage' },
          { name: 'Agence', path: 'AgencePage' }
        ]
      });
    },
    methods: {
      goToHome () {
        // { name: 'Acheter', path: '/buy' },
        // { name: 'Louer', path: '/buy' },
        this.$router.push('/')
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
    z-index: 10000;
  }
  .header-wrapper {
    width: 70%;
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
  }

  .menu li a {
    transition: ease all 0.2s;
  }

  .menu li a:hover {
    color: #3FD1FF;
    transition: ease all 0.2s;
  }


  .menu li a {
    text-decoration: none;
    color: #4A4A4A;
    font-size: 16px;
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
  }

  .button {
    padding: 10px 15px;
    background-color: #FF8317;
    border-radius: 20px;
    color: #FFF;
    margin-left: 30px;
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
  }

  .bm-item-list a span {
    color: #222;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
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
      bottom: 70px;
      color: #FF8317;
      font-size: 30px;
    }
  }
</style>
