<template>
  <div class="sellPage--container">
    <div class="title-container">
      <h1>L'agence <span class="lightblue">Viaduc Immobilier</span> vous<br>accueille tous les jours à Laval</h1>
      <p class="subline">L'agence du viaduc est une agence de proximité indépendante qui vous accueillera prochainement  137 rue du vieux saint Louis à LAVAL.<br>Vous écouter pour mieux comprendre vos besoins, vous conseiller pour la LOCATION, la VENTE ou l'ACHAT de votre projet immobilier et vous informer jusqu’à la signature des actes définitifs.</p>
    </div>

    <!-- <div class="page-content">
      <div class="page-content--title">
        <h2>Dites nous tout</h2>
        <p>Pas de panique, si vous ne connaissez pas certaines informations, <br>nous règleront cela ensemble lors de notre premier rendez-vous</p>
      </div>
    </div> -->
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
  name: 'AgencePage',
  components: { ContactForm }
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
    width: 50%;
    margin: 0 auto 40px;
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

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    p.subline {
      width: 70%;
      font-weight: 400;
      line-height: 26px;
    }
  }

</style>
