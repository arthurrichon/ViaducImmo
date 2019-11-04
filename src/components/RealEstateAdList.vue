<template lang="html">
  <div class="realEstateAdList--container">
    <RealEstateAdListItem
      v-for="ad in filteredAdList"
      v-if="!noResult"
      class="lastAd--item"
      :ad="ad"
      :adType="adType"
      :filter="filter"
    />
    <p v-if="noResult">Aucun résultat</p>
  </div>
</template>

<script>
import RealEstateAdListItem from './RealEstateAdListItem'

export default {
  name: 'RealEstateAdList',
  components: { RealEstateAdListItem },
  data: () => ({
    noResult: false
  }),
  props: {
    adList: {
      type: Array,
      default: function () { return [] }
    },
    searchFilter: {
      type: String,
      default: ''
    },
    adType: {
      type: String,
      default: ''
    },
    filter: {
      type: String,
      default: ''
    }
  },
  computed: {
    filteredAdList () {
      let list = this.adList.filter(ad => {
        return (ad.type_bien[0].toLowerCase().includes(this.filter.toLowerCase()) || ad.code_postal[0].toLowerCase().includes(this.filter.toLowerCase()))
      })
      return list
    }
  },
  watch: {
    filteredAdList: function (c) {
      if (c.length) {
        this.noResult = false
      } else {
        this.noResult = true
      }
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
