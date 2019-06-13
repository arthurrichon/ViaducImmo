<template>
  <div class="adpage-container">
    <div class="title-container">
      <h2><span class="black">{{ ad.type_bien[0] }}</span> <span class="orange">{{ ad.prix[0] }} €</span></h2>
    </div>

    <hooper :itemsToShow="2" :infiniteScroll="true" style="height: 436px;">
      <slide v-for="(images, name, indx) in ad.images[0]" :key="indx" :index="indx" v-if="name !== 'image_princ_min'" v-on:click.native="showLightbox(name)">
        <img class="slider-img" v-bind:src="imagePath(images[0])" alt="" style="height: 100%" >
      </slide>
      <slide>
        <div class="custom-slide">
          <h2>Contacter l'agence :</h2>
          <a class="orange-container">02 43 98 09 52</a>
          <a class="orange-container">Par message</a>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>

    <div class="adcontent-container">
      <div class="bloc fullwidth-bloc">
        <h2 class="standard-title">Description</h2>
        <p id="description" class="standard-content">{{ decode(ad.description_internet[0]) }}</p>
      </div>

      <div class="bloc third-bloc">
        <h2 class="standard-title">Détails</h2>
        <ul class="standard-list-container">
          <li v-if="ad.surface_habitable[0].length">Surface totale : {{ ad.surface_habitable[0] }}</li>
          <li v-if="ad.surface_habitable[0].length">Surface habitable : {{ ad.surface_habitable[0] }}</li>
          <li v-if="ad.nb_piece[0].length">Nombre de pièces : {{ ad.nb_piece[0] }}</li>
          <li v-if="ad.type_bien[0].length">Type de construction : {{ ad.type_bien[0] }}</li>
          <li v-if="ad.etage[0].length">Étage : {{ ad.etage[0] }}</li>
        </ul>
      </div>

      <div class="bloc third-bloc">
        <h2 class="standard-title">Équipement</h2>
        <ul class="standard-list-container">
          <li v-if="ad.type_chauffage[0].length">Chauffage : {{ ad.type_chauffage[0] }}</li>
          <li v-if="ad.eau[0].length">Eau chaude : {{ ad.eau[0] }}</li>
          <li v-if="ad.climatisation[0].length">Climatisation : {{ ad.climatisation[0] }}</li>
        </ul>
      </div>

      <div class="bloc third-bloc">
        <h2 class="standard-title">À savoir</h2>

        <ul class="standard-list-container">
          <!-- <li v-if="ad.description_internet[0].length">Travaux à prévoir : {{ decode(ad.description_internet[0]) }}</li> -->
          <li v-if="ad.taxe_fonciere[0].length">Taxe foncière : {{ ad.taxe_fonciere[0] }}</li>
          <li v-if="ad.montant_charges[0].length">Charges de coproriété : {{ ad.montant_charges[0] }}</li>
        </ul>
      </div>

      <div class="bloc third-bloc">
        <h2 class="standard-title">Consommation énergétique</h2>
        <!-- conso graph component -->
        <GraphComponent :graphType="'energy'" :rate="ad.consommation_energetique[0]"/>
      </div>

      <div class="bloc third-bloc">
        <h2 class="standard-title">Émissions de gaz à effet de serre</h2>
        <!-- conso graph component -->
        <GraphComponent :graphType="'gas'" :rate="ad.emission_GES[0]"/>
      </div>

      <div class="bloc third-bloc">
        <h2 class="standard-title">Copropriété</h2>
        <!-- conso graph component -->
        <ul class="standard-list-container">
          <li v-if="ad.nb_lots[0].length">Nombre de lots : {{ ad.nb_lots[0] }}</li>
          <li v-if="ad.montant_charges[0].length">Charges courante par an : {{ ad.montant_charges[0] }}</li>
          <li v-if="ad.procedure_redressement_syndic[0].length">Procédure en cours : {{ ad.procedure_redressement_syndic[0] }}</li>
        </ul>
      </div>

    </div>
    <Lightbox ref="lightbox" :image="lightboxImage" v-show="isModalVisible" @close="closeLightbox"/>
    <ContactForm :width="'100%'"/>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm'
import GraphComponent from '../components/GraphComponent'
import { Hooper, Slide, Navigation as HooperNavigation } from 'Hooper'
import Lightbox from '../components/Lightbox'

import 'hooper/dist/hooper.css';

export default {
  name: 'RealEstatePage',
  components: { ContactForm, GraphComponent, Hooper, Slide, HooperNavigation, Lightbox },
  data: () => ({
    ad: {},
    lightboxImage: '',
    isModalVisible: false
  }),
  mounted () {
    this.$nextTick(function () {
      let ad = this.$parent.annonces.find(obj => {
        return obj.idbien[0] === this.$route.params.ad
      })
      this.ad = ad
      this.getDecodedDescription()
    })

  },
  methods: {
    decode: function (str) {
      var txt = document.createElement('textarea')
    	txt.innerHTML = str;
    	return txt.value;
    },
    getDecodedDescription: function () {
      var txt = document.createElement('textarea')
    	txt.innerHTML = this.ad.description_internet[0]
      let container = document.getElementById("description")
      container.innerHTML = txt.value
    },
    imagePath: function (img) {
      return require('../../static/data/' + img)
    },
    showLightbox(imageArrayKey) {
      this.$emit('hasModalOpened', true);
      this.lightboxImage = this.imagePath(this.ad.images[0][imageArrayKey])
      this.isModalVisible = true;
    },
    closeLightbox() {
      this.$emit('hasModalOpened', false);
      this.isModalVisible = false;
    }
  }
}
</script>

<style lang="css" scoped>

.adpage-container {
  width: 80%;
  margin: 0 auto;
  min-height: 100%;
}

.title-container h2{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Rubik', sans-serif;
  font-size: 33px;
  font-weight: bold;
}

.orange { color: #FF8317 }
.black { color: #1B2733 }

.standard-title {
  font-size: 18px;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  color: #1B2733;
}

.standard-content {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  color: #637282;
}

.adcontent-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.bloc.third-bloc {
  width: calc(100% / 3);
}
.bloc {
  margin-bottom: 30px;
}
.standard-list-container li {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  color: #637282;
  font-weight: bold;
  margin: 10px 0;
  list-style-image: url('../assets/puce.svg');
}

.slider-img {
  width: 100%;
}

.custom-slide {
  background-color: #0A0633;
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.custom-slide h2 {
  margin-top: 0;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
  text-align: center;
}

.orange-container {
  border-radius: 5px;
  background-color: #FF8317;
  text-decoration: none;
  color: #FFFFFF;
  padding: 10px 15px;
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: bold;
  min-width: 60%;
  text-align: center;
}
</style>
