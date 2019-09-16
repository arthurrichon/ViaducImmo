<template lang="html">
  <div class="sellPage--container">
    <div class="title-container">
      <h2>Vous <span class="lightblue">louez</span> votre bien,<br>nous pouvons vous aider.</h2>
      <!-- <p class="subline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr<br>sed diam nonumy eirmod.</p> -->
      <SearchBar @onSearch="handleSearch" :hasSelect="false"/>
    </div>

    <div class="page-content">
      <!-- <div class="page-content--title">
        <h2>Dites nous tout</h2>
        <p>Si vous ne connaissez pas certaines informations, <br>nous règleront cela ensemble lors de notre premier rendez-vous</p>
      </div> -->
      <RealEstateAdList
        :adList="ads"
        :adType="'location'"
        :filter="filter"
      />
    </div>

    <ContactForm :width="'80%'"/>

  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import RealEstateAdList from '../components/RealEstateAdList'
import SearchBar from '../components/SearchBar'
export default {
  name: 'RentPage',
  components: {
    RealEstateAdList, ContactForm, SearchBar
  },
  data: () => ({
    lastAds: [],
    filter: ''
  }),
  props: {
    ads: {
      type: Array,
      default: function () { return [] }
    }
  },
  methods: {
    handleSearch (searchTerm) {
      this.filter = searchTerm.term
    }
  },
  created () {
    console.log(this.$route.params)
  }
}
</script>

<style lang="css">
.lightblue {
  color: #3FD1FF;
}

.title-container {
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title-container h2 {
  font-size: 33px;
}

p.subline {
  color: #637282;
  font-size: 20px;
}

.page-content {
  padding: 50px;
  border-radius: 5px;
  background-color: #F4FCFF;
  width: 80%;
  margin: 0 auto;
}

.page-content--title h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #1B2733;
  text-align: center;
  margin-bottom: 5px;
  padding-top: 40px;
}

.page-content--title p {
  font-family: 'Karla', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #637282;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 60px;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .page-content {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }

  .title-container h2 {
    width: 80%;
    margin: 20px auto;
    flex-direction: column;
  }
}
</style>
