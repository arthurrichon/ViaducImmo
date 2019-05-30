<template>
  <header>
    <div class="header-wrapper">
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
          <span>02 43 98 09 52</span>
        </div>
        <a class="button" href="#contact">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data: () => {
      return ({
        menuContent: [
          { name: 'Vendre', path: 'SellPage' },
          { name: 'Agence', path: '/agence' }
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

<style scoped>

  header {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
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
</style>
