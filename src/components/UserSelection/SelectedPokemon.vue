<template>
    <div class="selected-pokemon">
        <img v-bind:src="selectedPokemon && selectedPokemon.sprites ? selectedPokemon.sprites.front_default : ''">
        <p><b>NAME</b><span>{{ selectedPokemon.name }}</span> </p>
        <p><b>Weight</b><span>{{ selectedPokemon.weight }}</span> </p>
        <b>Abilities</b>
        <ul class="abilities">
            <li v-for="ability_ in selectedPokemon.abilities" :key="ability_.ability.url">
                {{ ability_.ability.name }}
            </li>
        </ul>
        <v-radar
                :stats="mapStats(selectedPokemon.stats)"
                :polycolor="polycolor"
                :radar="radar"
                :scale="scale">
        </v-radar>
        <b-button variant="outline-danger" @click="removePokemon">Remove Pokemon</b-button>
    </div>
</template>

<script>
    import Radar from 'vue-radar'
    import { mapActions } from "vuex";

    export default {
        name: 'SelectedPokemon',
        props: {
            selectedPokemon: Object,
            index: Number
        },
        components: {
            'v-radar': Radar
        },
        methods: {
            ...mapActions([
                'removePokemon'
            ]),
            removePokemon(){
                this.$store.dispatch('removePokemon', this.index);
            },
            mapStats(stats) {
              return stats.map(stat => {
                  return { name: stat.stat.name, value: stat.base_stat}
              });
            }
        },
        data()  {
            return {
                radar: {},
                scale: {},
                polycolor: 'rgba(250, 100, 50, .5)'
            }
        }

    }
</script>

<style lang="scss">
    .selected-pokemon {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p, b {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    }

    .v-radar {
        svg {
            width: 200px;
            height: 200px;
        }
    }
</style>
