<template lang="html">
  <div class="contactForm--container" id="contact">
    <h2 class="big-title">Contact</h2>

    <div class="column-container" v-bind:style="{width: width}">
      <div class="column half">
        <div class="content-details">
          <img class="logo" src="../assets/logositeverticalSVG.svg" alt="">
          <p>137 rue du vieux saint Louis<br>53000 LAVAL<br>Transaction : 02 43 49 17 63 <br>Location : 06 34 54 04 06<br>contact@agenceviaduc.fr</p>
        </div>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.712312589115!2d-0.7735136843531094!3d48.07719567921862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4808fdf5f262e7a3%3A0xf7206d9e47c1fd9a!2s137+Rue+du+Vieux+Saint-Louis%2C+53000+Laval!5e0!3m2!1sfr!2sfr!4v1559565781369!5m2!1sfr!2sfr" width="500" height="252" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>

      <div class="column half">
        <input type="text" name="" value="" class="standard-input" placeholder="Nom" v-model="formData.name">
        <input type="text" name="" value="" class="standard-input" placeholder="Email" v-model="formData.email">
        <textarea name="name" class="standard-input" placeholder="votre message" v-model="formData.message"></textarea>
        <!-- <button @click="recaptcha">Execute recaptcha</button> -->
        <div class="buttons-container">
          <vue-recaptcha sitekey="6LdsvqgUAAAAAH64Pgsz_wvbKqnvx-daI4wk4JaP" @verify="verifyCaptcha" :style="windowWidth < 360 ? classObject : ''"></vue-recaptcha>
          <button
            class="orange-button"
            type="button"
            name="button"
            v-on:click="submit()"
            :disabled="hasValidatedRecaptcha === false"
            >Envoyer</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha';
export default {
  name: 'ContactForm',
  components: { VueRecaptcha },
  data: () => ({
    formData: {
      name: '',
      email: '',
      message: ''
    },
    hasValidatedRecaptcha: false,
    recaptchaError: false,
    windowWidth: 0,
    classObject: {
      'transform': 'scale(0.85)',
      'transform-origin': '0 0'
    }
  }),
  props: {
    width: {
      type: String,
      default: '80%'
    }
  },
  methods: {
    submit () {
      this.recaptchaError = false
      if (hasValidatedRecaptcha) {
        axios({
          method: 'post',
          url: '/static/contact.php',
          data: this.formData
        }).then(res => {
          console.log('Mail envoyé')
        })
      } else {
        this.recaptchaError = true
        this.hasValidatedRecaptcha = false
      }
    },
    verifyCaptcha (res) {
      res ? this.hasValidatedRecaptcha = true : this.hasValidatedRecaptcha = false
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
.big-title {
  font-size: 33px;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  color: #1B2733;
  text-align: center;
}

.column-container {
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 20px;
}
 .form {
   flex-direction: column;
 }
.column.half {
  width: 48%;
}

.logo {
  height: 80px;
}

.content-details {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.content-details p {
  margin-left: 50px;
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #637282;
}

.map {
  width: 100%;
}

.standard-input {
  border: 1px solid #DFE2E5;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
}

textarea.standard-input {
  min-height: 150px;
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

.buttons-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.orange-button:disabled {
  background-color: #888;
  border-color: #888;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
  .map {
    display: none;
  }

  .column-container {
    flex-direction: column;
  }

  .column.half {
    width: 100%;
  }

  .content-details p {
    margin-left: 0px;
  }

  .content-details img {
    display: none;
  }

  .buttons-container {
    flex-direction: column;
  }

  .buttons-container button {
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    font-size: 20px;
  }
}
</style>
