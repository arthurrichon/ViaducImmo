<template lang="html">
  <div class="sellForm--container">
    <div class="step step-1" v-show="step === 1">
      <div class="form-bloc full">
        <h2>Type de bien</h2>
        <div class="buttons-container">
          <div class="big-button" v-on:click="toggleType('maison')" v-bind:class="{ active: formData.type === 'maison'}">
            <div class="image maison"></div>
            <p>Maison</p>
          </div>
          <div class="big-button" v-on:click="toggleType('appartement')" v-bind:class="{ active: formData.type === 'appartement'}">
            <div class="image appartement"></div>
            <p>Appartement</p>
          </div>
          <div class="big-button" v-on:click="toggleType('fdc')" v-bind:class="{ active: formData.type === 'fdc'}">
            <div class="image fdc"></div>
            <p>Fond de Commerce</p>
          </div>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="already" value="" v-model="formData.alreadySelling">
          <label for="already">Mon bien est déjà en vente ailleurs</label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" name="already" value="" v-model="formData.isRenting">
          <label for="already">Je souhaite mettre mon bien en location</label>
        </div>
      </div>
      <div class="form-bloc full">
        <h2>Vos informations</h2>
        <div class="input-container">
          <input type="text" class="standard-input" v-model="formData.loc" placeholder="Localisation">
          <input type="text" class="standard-input" v-model="formData.surface" placeholder="Surface en m²">
          <input type="text" class="standard-input" v-model="formData.nbPieces" placeholder="Nombre de pièces">
          <input type="text" class="standard-input" v-model="formData.surfaceTerr" placeholder="Surface du terrain en m²">
          <input type="text" class="standard-input" v-model="formData.garage" placeholder="Garage">
          <button class="orange-button" type="button" name="button" v-on:click="step += 1">Étape suivante</button>
        </div>
      </div>
    </div>

    <div class="step step-2" v-show="step === 2">
      <div class="form-bloc half">
        <h2>Vos coordonnées</h2>
        <input type="text" class="standard-input" v-model="formData.nom" placeholder="Nom">
        <input type="text" class="standard-input" v-model="formData.prenom" placeholder="Prénom">
        <input type="text" class="standard-input" v-model="formData.tel" placeholder="Téléphone">
        <h2>Vos disponibilités</h2>
        <div class="dispo-container">
          <div class="dispo-list" v-for="(day, name) in days">
            <div class="dispo-item" v-on:click="day.selected = !day.selected" v-bind:class="day.selected ? 'active' : ''">{{ name }}</div>
            <div class="dispo-time" v-show="day.selected === true">
              <div class="dispo-item" v-on:click="day.matin = !day.matin" v-bind:class="day.matin && day.selected ? 'active' : ''">
                Matin
              </div>
              <div class="dispo-item" v-on:click="day.aprem = !day.aprem" v-bind:class="day.aprem && day.selected ? 'active' : ''">
                Après-midi
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-bloc half">
        <h2>Vous avez autre chose à nous dire ?</h2>
        <textarea name="name" class="standard-input" placeholder="message" rows="9" v-model="formData.message"></textarea>
        <div class="buttons-container">
          <vue-recaptcha sitekey="6LdsvqgUAAAAAH64Pgsz_wvbKqnvx-daI4wk4JaP" @verify="verifyCaptcha" :style="windowWidth < 481 ? classObject : ''"></vue-recaptcha>
          <button class="orange-button" type="button" name="button" v-on:click="submit()" :disabled="!hasValidatedRecaptcha">Envoyer</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import axios from 'axios';

export default {
  name: 'SellForm',
  components: { VueRecaptcha },
  data: () => ({
    step: 1,
    days: {
      Lundi: { selected: false, matin: false, aprem: false },
      Mardi: { selected: false, matin: false, aprem: false },
      Mercredi: { selected: false, matin: false, aprem: false },
      Jeudi: { selected: false, matin: false, aprem: false },
      Vendredi: { selected: false, matin: false, aprem: false }
    },
    formData: {
      loc: '',
      type: 'maison',
      surface: '',
      nbPieces: '',
      surfaceTerr: '',
      garage: '',
      nom: '',
      prenom: '',
      tel: '',
      message: '',
      formattedBody: '',
      dispo: [],
      hasValidatedRecaptcha: false,
      alreadySelling: false,
      isRenting: false
    },
    windowWidth: 0,
    classObject: {
      'transform': 'scale(0.73)'
    }
  }),
  methods: {
    toggleType (type) {
      this.formData.type = type
    },
    submit () {
      if (hasValidatedRecaptcha) {
        this.formDispoContent()
        axios({
          method: 'post',
          url: '/static/contact_vente.php',
          data: this.formData
        }).then(res => {
          console.log(res)
        })
      }
    },
    formDispoContent () {
      let dayArray = []
      for (let day in this.days) {
        if (this.days[day].selected) {
          let matin, aprem
          this.days[day].matin ? matin = 'Matin' : matin = ''
          this.days[day].aprem ? aprem = 'Après-Midi' : aprem = ''
          let str = day + ' : ' + matin + ' ' + aprem
          dayArray.push(str)
        }
      }
      this.formData.dispo = dayArray
    },
    verifyCaptcha (res) {
      res ? this.hasValidatedRecaptcha = true : this.hasValidatedRecaptcha = false
    }
  },
  watch: {
    type: function (c, o) {
      this.formData.type = this.type
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.windowWidth = document.documentElement.clientWidth
    })
  }
}
</script>

<style lang="css" scoped>
  .sellForm--container {
    background-color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
    padding: 30px;
  }

  .form-bloc {

  }

  .form-bloc h2 {
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #637282;
  }

  .big-button {
    width: calc(100% / 3);
    color: #2884CE;
    background-color: #DFE2E5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 0 10px;
    cursor: pointer;
  }

  .big-button.active {
    color: #FFFFFF;
    background-color: #2884CE;
  }

  .big-button:first-child { margin-left: 0;}
  .big-button:last-child { margin-right: 0;}

  .big-button p {
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin-left: 25px;
  }

  .maison {
    background-image: url('../assets/home-blue.svg');
    width: 50px;
    height: 64px;
    margin-top: 10px;
  }

  .appartement {
    background-image: url('../assets/app-blue.svg');
    width: 50px;
    height: 64px;
    margin-top: 10px;
  }

  .fdc {
    background-image: url('../assets/fdc-blue.svg');
    width: 50px;
    height: 64px;
    margin-top: 10px;
  }

  .active .maison { background-image: url('../assets/home-white.svg');}
  .active .appartement { background-image: url('../assets/app-white.svg');}
  .active .fdc { background-image: url('../assets/fdc-white.svg');}

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .checkbox-container label {
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #637282;
    margin-left: 10px;
  }

  .checkbox-container {
    margin: 10px 0 20px;
    display: flex;
    align-items: center;
  }

  .standard-input {
    border: 1px solid #DFE2E5;
    border-radius: 5px;
    width: 45%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
  }

  .standard-input:nth-child(2n+1) {
    margin-left: 0px;
  }

  .standard-input:nth-child(n+2) {
    margin-right: 0px;
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .orange-button {
    border-radius: 5px;
    border: 1px solid #FF8317;
    background-color: #FF8317;
    text-decoration: none;
    color: #FFFFFF;
    padding: 10px 15px;
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    font-weight: bold;
    min-width: 20%;
    text-align: center;
  }

  .form-bloc.half {
    width: 50%;
    margin: 0 10px;
  }

  .half .standard-input {
    width: 100%;
  }
  .dispo-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .dispo-item {
    font-family: 'Karla', sans-serif;
    font-size: 17px;
    color: #637282;
    border: 1px solid #DFE2E5;
    padding: 10px;
    width: 80px;
    border-radius: 5px;
    margin: 5px;
    text-align: center;
  }

  .dispo-item.active {
    background-color: #2884CE;
    border-color:#2884CE;
    color: #FFFFFF;

  }

  .step-2 {
    display: flex;
    align-items: flex-start;
  }

  .orange-button:disabled {
    background-color: #888;
    border-color: #888;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {

    .buttons-container {
      flex-direction: column;
    }

    .buttons-container .big-button {
      margin: 10px 0;
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
    }

    .buttons-container .big-button p {
      margin-left: 15px;
    }

    .image.appartement {
      /* height: 50px; */
    }

    .image.fdc {
      height: 54px;
    }

    .input-container .standard-input {
      width: 100%;
    }

    .orange-button {
      width: 100%;
      margin-top: 10px;
    }

    .form-bloc.half {
      width: 100%;
      margin: 0;
    }

    .step.step-2 {
      flex-direction: column;
    }

    .dispo-container {
      flex-direction: column;
    }

    .dispo-list {
      width: 100%;
    }

    .dispo-list .dispo-item {
      width: 100%;
      box-sizing: border-box;
      margin: 5px 0;
    }
  }
</style>
