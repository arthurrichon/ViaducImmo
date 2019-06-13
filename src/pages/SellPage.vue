<template>
  <div class="sellPage--container">
    <div class="title-container">
      <h2>Vous <span class="lightblue">vendez</span> votre bien,<br>nous pouvons vous aider.</h2>
      <!-- <p class="subline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr<br>sed diam nonumy eirmod.</p> -->
    </div>

    <div class="page-content">
      <div class="page-content--title">
        <h2>Dites nous tout</h2>
        <p>Si vous ne connaissez pas certaines informations, <br>nous règleront cela ensemble lors de notre premier rendez-vous</p>
      </div>
      <SellForm />
    </div>

  </div>
</template>

<script>
import SellForm from '@/components/SellForm'
export default {
  name: 'SellPage',
  components: { SellForm }
}
</script>

<style lang="css" scoped>

  .lightblue {
    color: #3FD1FF;
  }

  .title-container {
    text-align: center;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    text-align: center;
  }

  .title-container h2 {
    font-size: 33px;
  }

  p.subline {
    color: #637282;
    font-size: 20px;
  }

  .page-content {
    padding: 50px;
    border-radius: 5px;
    background-color: #F4FCFF;
    width: 80%;
    margin: 0 auto;
  }

  .page-content--title h2 {
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #1B2733;
    text-align: center;
    margin-bottom: 5px;
    padding-top: 40px;
  }

  .page-content--title p {
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #637282;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 60px;
  }
</style>
