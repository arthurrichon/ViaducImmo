<template lang="html">
  <div class="contactForm--container" id="contact">
    <h2 class="big-title">Contact</h2>

    <div class="column-container">
      <div class="column half">
        <div class="content-details">
          <img class="logo" src="../assets/logositeverticalSVG.svg" alt="">
          <p>38 rue du vieux Saint Louis<br>53000 LAVAL<br>02 43 98 09 52<br>contact@agenceviaduc.fr</p>
        </div>
        <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.8922972850564!2d-0.774934884003273!3d48.07372177921832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4808fdf461f9e58d%3A0x8de250e473138ac3!2s38+Rue+du+Vieux+Saint-Louis%2C+53000+Laval!5e0!3m2!1sfr!2sfr!4v1559215654568!5m2!1sfr!2sfr"
width="580" height="250" frameborder="0" style="border:0"
allowfullscreen></iframe>
      </div>

      <div class="column half">
        <input type="text" name="" value="" class="standard-input" placeholder="Nom" v-model="formData.name">
        <input type="text" name="" value="" class="standard-input" placeholder="Email" v-model="formData.email">
        <textarea name="name" class="standard-input" placeholder="votre message" v-model="formData.message"></textarea>
        <button class="orange-button" type="button" name="button" v-on:click="submit()">Envoyer</button>
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactForm',
  data: () => ({
    formData: {
      name: '',
      email: '',
      message: ''
    }
  }),
  methods: {
    submit () {
      axios({
        method: 'post',
        url: '/static/contact.php',
        data: this.formData
      }).then(res => {
        console.log('Mail envoyé')
      })
    }
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


</style>
