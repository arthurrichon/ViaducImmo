<template lang="html">
  <router-link class="card-item" :to="{ name: 'ad', params: { ad: ad.idbien[0] }}" v-if="!adType.length || (adType.length && adType === ad.type_transaction[0])">
    <div class="img-wrapper">
      <img v-bind:src="imagePath(ad.images[0].image_1)" />
    </div>
    <div class="caption-wrapper">
      <div class="type-wrapper">
        <h2 class="caption-title">{{ ad.type_bien[0] }}</h2>
        <p class="caption-address"><img src="" alt="">{{ ad.ville[0] }} ({{ ad.code_postal[0] }})</p>
      </div>
      <div class="price-wrapper">
        <p class="price">{{ ad.prix[0] }} €</p>
      </div>
    </div>

    <div class="card-footer">
      <div class="info-box sqm">
        <img src="../assets/arrow-double.svg" alt="" style="width: 20px; height: 20px;">
        <span>{{ ad.surface_habitable[0] }} m²</span>
      </div>
      <div class="info-box">
        <img src="../assets/pieces.svg" alt="" style="width: 30px; height: 20px;">
        <span>{{ ad.nb_piece[0] }}</span>
      </div>
      <div class="info-box">
        <img src="../assets/bed-reworked.svg" alt="" style="width: 30px; height: 20px;">
        <span>{{ ad.nb_chambre[0] }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RealEstateAdListItem',
  props: {
    ad: {
      type: Object,
      default: function () { return {} }
    },
    adType: {
      type: String,
      default: ''
    }
  },
  methods: {
    imagePath: function (img) {
      return require('../../static/data/' + img)
    }
  }
}
</script>

<style lang="css" scoped>
  .card-item {
    overflow: hidden;
    width: 30%;
    border-radius: 5px;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.16);
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 20px 0;
  }

  .card-item .img-wrapper {
    width: 100%;
  }

  .card-item .img-wrapper img {
    width: 100%;
  }

  .caption-title {
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    color: #1B2733;
  }

  .caption-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 15px;
  }

  .type-wrapper {
    width: 65%;
  }

  .caption-address {
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #637282;
  }

  .price-wrapper {
    width: 35%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #FF8317;
  }

  .card-footer {
    background-color: #F9FAFC;
    border: 1px solid #707070;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .info-box {
    border-right: 1px solid #707070;
    width: calc(100% / 3);
    padding: 15px 10px;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #637282;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info-box span {
    margin-left: 5px;
  }

  .info-box.sqm {
    font-size: 14px;
  }

  .info-box:last-child {
    border-right: 0;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .card-item {
      width: 100%;
    }

    /* width: 80%;
margin: 0 auto; */
  }
</style>
