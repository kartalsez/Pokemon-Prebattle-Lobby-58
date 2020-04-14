<template>
  <div class="user-selection">
    <header>
      <h2>Selections ( {{ (tabIndex + 1) + '/' + pokemonListInStore.length }} )</h2>
      <small>Total weight: {{totalWeightInStore}}</small>
    </header>
    <section>

      <b-card no-body>
        <b-tabs v-model="tabIndex"  pills card end align="center">
          <b-tab v-bind:title="selectedPokemon_.name" v-for="selectedPokemon_ in pokemonListInStore" :key="selectedPokemon_.id">
            <selected-pokemon :selectedPokemon="selectedPokemon_"></selected-pokemon>
          </b-tab>
        </b-tabs>
      </b-card>

    </section>
  </div>
</template>

<script>
import SelectedPokemon from './SelectedPokemon.vue'

export default {
  name: 'UserSelection',
  components: {
    SelectedPokemon
  },
  computed: {
    pokemonListInStore () {
      return this.$store.state.pokemonList
    },
    totalWeightInStore() {
      return this.$store.state.totalWeight
    }
  },
  data() {
    return {
      tabIndex: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .user-selection {
    flex: 1 1 100%;
    max-width: 75%;
    min-width: 75%;
    display: flex;
    flex-direction: column;
    padding: 4px 16px 4px;
    border-right-style: solid;
    border-right-color: #8080808c;
    border-right-width: 2px;

    header, h2, section {
      width: 100%
    }

    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }

    section {
      .card {
        border: none;
        .tabs {
          .tab-content {
            min-height: 500px !important;
            border: none !important;
          }
          .card-footer {
            background-color: white !important;
            border: none !important;
          }
        }
      }
    }
  }
</style>
