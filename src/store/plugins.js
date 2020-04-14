import { STORAGE_KEY_POKEMON, STORAGE_KEY_WEIGHT } from './mutations'
import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
    store.subscribe((mutation, { pokemonList, totalWeight }) => {
        window.localStorage.setItem(STORAGE_KEY_POKEMON, JSON.stringify(pokemonList));
        window.localStorage.setItem(STORAGE_KEY_WEIGHT, totalWeight);
    })
};

export default process.env.NODE_ENV !== 'production'
    ? [createLogger(), localStoragePlugin]
    : [localStoragePlugin]
