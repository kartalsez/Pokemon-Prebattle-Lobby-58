<template>
  <div id="app">
    <UserSelection/>
    <ShowCase @onSelectedPokemonList="onSelectedPokemonList($event)" />
  </div>
</template>

<script>
import UserSelection from './components/UserSelection.vue'
import ShowCase from './components/ShowCase.vue'

export default {
  name: 'App',
  components: {
    UserSelection,
    ShowCase
  },
  methods: {
    onSelectedPokemonList(selectedPokemonList) {
      console.log('selectedPokemonList:', selectedPokemonList);
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
