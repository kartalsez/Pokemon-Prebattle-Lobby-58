export default {
    addPokemon ({ commit }, pokemon) {
        commit('addPokemon', pokemon)
    },
    removePokemon ({ commit }, index) {
        commit('removePokemon', index)
    }
}
