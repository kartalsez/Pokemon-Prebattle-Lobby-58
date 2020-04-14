export const STORAGE_KEY_POKEMON = 'pokemonList-vuejs';
export const STORAGE_KEY_WEIGHT = 'totalWeight-vuejs';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
    window.localStorage.clear()
}

import * as helpers from '../helpers';

export const mutations = {
    addPokemon (state, pokemon) {
        state.pokemonList.push(pokemon);
        state.totalWeight = helpers.computeTotalWeight(state.pokemonList);
    }
};
