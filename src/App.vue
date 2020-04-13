<template>
  <div id="app">
    <UserSelection :selectedPokemonList="selectedPokemonList" :totalWeight="totalWeight"/>
    <ShowCase @onAddedPokemon="onAddedPokemon($event)" />
  </div>
</template>

<script>
import UserSelection from './components/UserSelection/UserSelection.vue'
import ShowCase from './components/ShowCase/ShowCase.vue'

export default {
  name: 'App',
  components: {
    UserSelection,
    ShowCase
  },
  data() {
    return {
      selectedPokemonList: [],
      totalWeight: 0
    }
  },
  methods: {
    onAddedPokemon(event) {
      this.selectedPokemonList = event.selectedPokemonList;
      this.totalWeight = event.totalWeight;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  margin: 50px auto 0;
}
</style>
