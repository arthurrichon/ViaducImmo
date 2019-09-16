<template>
  <div class="searchBar--container">
    <select class="selectType" name="selectTypes" v-model="typeSelected" v-if="hasSelect">
      <option v-for="(type, index) in types" :value="type.value" :selected="index === 0 ? true : false">{{ type.displayName }}</option>
    </select>
    <input
      type="text" name="searchInput" v-model="searchValue" value="" placeholder="Où ? (Ville, code postal...)"
      v-bind:class="{'borderLeft': !hasSelect}"
    />
    <button type="button" name="button" v-on:click="search()">Rechercher</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: () => ({
    types: [
      {value: 'BuyPage', displayName: 'Acheter'},
      {value: 'RentPage', displayName: 'Louer'}
    ],
    typeSelected: 'BuyPage',
    searchValue: ''
  }),
  props: {
    hasSelect: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    search () {
      this.$emit('onSearch', {type: this.typeSelected, term: this.searchValue})
    }
  }
}
</script>

<style>
  .searchBar--container {
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
  }

  .selectType {
    color: #FFF;
    background-color: #3FD1FF;
    border-radius: 5px 0 0 5px;
    border: 1px solid #3FD1FF;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 10px;
    cursor: pointer;
  }

  .searchBar--container input {
    padding: 10px;
    border: 0;
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
  }

  .searchBar--container button {
    background-color: #FF8317;
    color: #FFF;
    border-radius: 0 5px 5px 0;
    border: 1px solid #FF8317;
    padding: 10px;
  }

  input.borderLeft {
    border-left: 1px solid #DDD;
    border-radius: 5px 0 0 5px;
  }
</style>
