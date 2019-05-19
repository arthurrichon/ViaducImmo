<template>
  <header>
    <div class="header-wrapper">
      <div class="menu-wrapper">
        <!-- <img src="" alt=""> -->
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
        <div class="button">Contact</div>
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
          { name: 'Achat', path: '/buy' },
          { name: 'Location', path: '/buy' },
          { name: 'Vente', path: '/buy' },
          { name: 'Agence', path: '/us' }
        ]
      });
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
    align-items: center;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0;
    margin: 0;
  }

  .menu li {
    margin: 10px;
    list-style: none;
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
  }
</style>
