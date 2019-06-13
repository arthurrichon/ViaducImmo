<template>
  <div class="homePage--container">

    <!-- Main headband -->
    <div class="headband--wrapper">
      <div class="caption--wrapper">
        <h2 class="title-big"><span class="lightblue">Achetez, louez ou vendez</span><br> un bien immobilier en Mayenne avec Viaduc Immobilier</h2>
        <p class="title-sub">L'agence du viaduc est une agence de proximité indépendante qui vous accueillera prochainement  137 rue du vieux saint Louis à LAVAL. Vous écouter pour mieux comprendre vos besoins, vous conseiller pour la LOCATION, la VENTE ou l'ACHAT de votre projet immobilier et vous informer jusqu’à la signature des actes définitifs.</p>

        <!-- <div class="searchBar--container">
          Searchbar here (wip)
        </div> -->
      </div>
      <div class="image--wrapper">
        <img src="../assets/Viaduc.png" alt="">
      </div>
    </div>
    <input type="text" name="" value="" v-model="search">
    <div class="lastAdded--wrapper">
      <div class="lastAddedFilters-container">
        <h2>Derniers ajouts</h2>
        <p>Les biens immobiliers ajoutés récemment près de chez vous</p>
      </div>
      <div class="blue-background"></div>
      <RealEstateAdList
        :adList="lastAds"
        :searchFilter="search"
      />
    </div>

    <ContactForm :width="'80%'"/>
  </div>
</template>

<script>
  import RealEstateAdList from '../components/RealEstateAdList'
  import ContactForm from '../components/ContactForm'

  export default {
    name: 'HomePage',
    components: {
      RealEstateAdList,
      ContactForm
    },
    data: () => ({
      lastAds: [],
      search: ''
    }),
    mounted () {
      this.$nextTick(function () {
        this.lastAds = this.$parent.annonces
      })
    }

  }
</script>


<style>
  .homePage--container {

  }

  .image--wrapper img {
    width: 500px;
  }
  .headband--wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5% 10%;
    width: 100%;
    box-sizing: border-box;
  }

  .lightblue {
    color: #3FD1FF;
  }

  h2.title-big {
    font-size: 33px;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    color: #1B2733;
  }

  p.title-sub {
    font-size: 20px;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    color: #637282;
  }

  .lastAdded--wrapper {
    position: relative;
    margin-bottom: 50px;
  }

  .lastAddedFilters-container {

    text-align: center;
  }

  .lastAddedFilters-container h2 {
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #1B2733;
    margin: 5px;
  }

  .lastAddedFilters-container p {
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #637282;
    margin: 0;
    margin-bottom: 20px;
  }

  .blue-background {
    background-color: #F4FCFF;
    border-radius: 5px;
    position: absolute;
    width: 70%;
    top: -50px;
    bottom: 150px;
    left: 15%;
    right: 15%;
    z-index: -1;
  }
</style>
