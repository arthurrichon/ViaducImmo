<template lang="html">
  <div class="realEstateAdList--container">
    <RealEstateAdListItem
      v-for="ad in adList"
      class="lastAd--item"
      :ad="ad"
    />
  </div>
</template>

<script>
import RealEstateAdListItem from './RealEstateAdListItem'

export default {
  name: 'RealEstateAdList',
  components: { RealEstateAdListItem },
  props: {
    adList: {
      type: Array,
      default: function () { return [] }
    }
  }
}
</script>

<style lang="css" scoped>
  .realEstateAdList--container {
    width: 100%;
    padding: 0 10%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
