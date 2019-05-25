<template lang="html">
  <div class="card-item">
    <div class="img-wrapper">
      <img v-bind:src="imagePath(ad.images[0].image_princ_min)" />
    </div>
    <div class="caption-wrapper">
      <div class="type-wrapper">
        <h2 class="caption-title">{{ ad.type_bien[0] }}</h2>
        <p class="caption-address"><img src="" alt="">{{ ad.address }}</p>
      </div>
      <div class="price-wrapper">
        <p class="price">{{ ad.price }}</p>
      </div>
    </div>

    <div class="card-footer">
      <div class="info-box">
        <img src="" alt="">
        <span>{{ ad.smeters }}</span>
      </div>
      <div class="info-box">
        <img src="" alt="">
        <span>{{ ad.rooms }}</span>
      </div>
      <div class="info-box">
        <img src="" alt="">
        <span>{{ ad.bedrooms }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealEstateAdListItem',
  props: {
    ad: {
      type: Object,
      default: function () { return {} }
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
    box-shadow: 3px 3px 6px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
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

  .type-wrapper, .price-wrapper {
    width: 50%;
  }

  .caption-address {
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #637282;
  }

  .price-wrapper {
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
    padding: 8px;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #637282;
    text-align: center;
  }

  .info-box:last-child {
    border-right: 0;
  }
</style>
