<template>
  <div class="adpage-container" v-show="ad">
    <div class="title-container">
      <h2><span class="black">{{ ad.type_bien[0] }}</span> <span class="orange">{{ ad.prix[0] }} €</span></h2>
    </div>

    <hooper v-bind:style="{height: height || 'auto'}"
      :settings="hooperSettings"
      id="hooper"
      ref="slider"
      >
      <slide v-for="(images, name, indx) in ad.images[0]" :key="indx" :index="indx" v-on:click.native="showLightbox(name)">
        <img class="slider-img" v-bind:src="imagePath(images[0])" alt="" style="height: 100%">
      </slide>
      <slide>
        <div class="custom-slide">
          <h2>Contacter l'agence :</h2>
          <a class="orange-container" href="#contact">02 43 98 09 52</a>
          <a class="orange-container" href="#contact">Par message</a>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>

    <div class="adcontent-container">
      <div class="bloc fullwidth-bloc">
        <h2 class="standard-title">Description</h2>
        <div id="description" class="standard-content"></div>
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
    <Lightbox
      ref="lightbox"
      :image="lightboxImage"
      v-show="isModalVisible"
      @close="closeLightbox"
      @prev="getPreviousImage()"
      @next="getNextImage()"
    />
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
  props: {
    ads: {
      type: Array,
      default: function () { return [] }
    }
  },
  data: () => ({
    ad: null,
    lightboxImage: '',
    isModalVisible: false,
    slideClientHeight: '',
    height: '',
    hooperSettings: {
      breakpoints: {
        itemsToShow: 2,
        infiniteScroll: true,
        500: {
          itemsToShow: 1,
          infiniteScroll: true
        },
        1000: {
          itemsToShow: 2,
          infiniteScroll: true
        }
      }
    }
  }),
  mounted () {
    this.getAd()
  },
  mounted () {
    this.test()
    this.calcImageHeight()
    this.lightboxImage = 'a'
    this.clientHeight = this.$refs.slider.$el.clientHeight
    let that = this
    setTimeout(() => {
      this.getDecodedDescription(this.ad.description_internet[0])
    })
  },
  methods: {
    getPreviousImage () {
      if (this.$refs.slider.currentSlide === 0) {
        this.$refs.slider.slideTo(Object.keys(this.ad.images[0]).length - 1)
      } else {
        this.$refs.slider.slidePrev()
      }

      let imageName = this.getImageNameFromSliderIndex(this.$refs.slider.currentSlide)
      this.showLightbox(imageName)
    },
    getNextImage () {
      if (this.$refs.slider.currentSlide > Object.keys(this.ad.images[0]).length - 1) {
        this.$refs.slider.slideTo(Object.keys(this.ad.images[0]).length - 1)
      } else {
        this.$refs.slider.slideNext()
      }

      let imageName = this.getImageNameFromSliderIndex(this.$refs.slider.currentSlide)
      this.showLightbox(imageName)
    },
    getImageNameFromSliderIndex (imageIndex) {
      if (imageIndex < 0) {
        imageIndex = Object.keys(this.ad.images[0]).length - 1
      }
      let imageToShowKey = Object.keys(this.ad.images[0])[imageIndex]
      return imageToShowKey
    },
    async test () {
      await this.$refs.slider.updateWidth()
    },
    getAd () {
      let ad = this.$props.ads.find(obj => {
        return obj.idbien[0] === this.$route.params.ad
      })
      this.ad = ad
    },
    calcImageHeight () {
      let sliderHeight = this.$refs.slider
    },
    decode (str) {
      var txt = document.createElement('textarea')
    	txt.innerHTML = str;
    	return txt.value;
    },
    getDecodedDescription () {
      var txt = document.createElement('textarea')
    	txt.innerHTML = this.ad.description_internet[0]
      let container = document.getElementById("description")
      container.innerHTML = txt.value
    },
    imagePath (img) {
      return require('../../static/data/' + img)
    },
    showLightbox (imageArrayKey, event) {
      console.log(event)
      this.$emit('hasModalOpened', true);
      this.lightboxImage = this.imagePath(this.ad.images[0][imageArrayKey])
      this.isModalVisible = true;
    },
    closeLightbox () {
      this.$emit('hasModalOpened', false);
      this.isModalVisible = false;
    }
  },
  watch: {
    slideClientHeight: {
      immediate: true,
      handler: function (n, o) {
        let that = this
        setTimeout(() => {
          that.height = that.$refs.slider.$el.clientHeight + 'px'
          console.log(that.$refs.slider.$el.clientHeight)
        }, 0)
      }
    },
    '$props.ads': function (c, o) {
      console.log('yeet')
      console.log(this.$props.ads)
      this.getAd()
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
.hooper {
  height: auto;
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
.bloc.fullwidth-bloc {
  width: 100%;
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
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

.hooper-next { padding: 0 0 0 20px; }
.hooper-prev { padding: 0 20px 0 0; }
.hooper-next svg, .hooper-prev svg { fill: white }
.hooper-next, .hooper-prev {
  background-color: #3FD1FF;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .bloc.third-bloc {
    width: 100%;
  }
  .title-container h2 {
    width: 80%;
    margin: 20px auto;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    margin: 20px 0;
  }
}


</style>
