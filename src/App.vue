<template>
  <div id="app">
    <UserSelection />
    <ShowCase />
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
