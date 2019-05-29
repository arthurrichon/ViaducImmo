<template lang="html">
  <div class="realEstateAdList--container">
    <RealEstateAdListItem
      v-for="ad in filteredAdList"
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
    },
    searchFilter: {
      type: String,
      default: ''
    }
  },
  computed: {
    filteredAdList () {
      return this.adList.filter(ad => {
        return ad.type_bien[0].toLowerCase().includes(this.$props.searchFilter.toLowerCase())
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .realEstateAdList--container {
    width: 100%;
    padding: 0 8%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
