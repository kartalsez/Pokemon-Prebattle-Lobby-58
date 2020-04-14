import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY_POKEMON, STORAGE_KEY_WEIGHT } from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemonList: JSON.parse(window.localStorage.getItem(STORAGE_KEY_POKEMON) || '[]'),
        totalWeight: window.localStorage.getItem(STORAGE_KEY_WEIGHT) || 0
    },
    actions,
    mutations,
    plugins
})
