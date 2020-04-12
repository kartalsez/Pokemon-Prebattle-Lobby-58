<template>
    <div class="showcase">
        <header>
            <h2>Showcase</h2>
        </header>
        <section>
            <button v-for="pokemon_ in pokemonList" :key="pokemon_.url" @click="onClickPokemon(pokemon_.url)" v-b-modal.modal-pokemon-info> {{ pokemon_.name }}</button>
        </section>
        <footer>
            <b-pagination @change="onChangePagination($event)" v-model="currentPage" :per-page="1" :total-rows="rows" align="center" size="sm"></b-pagination>
        </footer>

        <b-modal id="modal-pokemon-info" title="Pokemon Basic Info" @ok="onClickOK()">
            <main>
                <img v-bind:src="selectedPokemon && selectedPokemon.sprites ? selectedPokemon.sprites.front_default : ''">
                <nav>
                    <p><b>Name: </b><span>{{ selectedPokemon.name }}</span> </p>
                    <p><b>Weight: </b><span>{{ selectedPokemon.weight }}</span> </p>
                    <b>Abilities: </b>
                    <ul class="abilities">
                        <li v-for="ability_ in selectedPokemon.abilities" :key="ability_.ability.url">
                            {{ ability_.ability.name }}
                        </li>
                    </ul>
                </nav>
            </main>
        </b-modal>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ShowCase',
        props: {
            msg: String,
        },
        data() {
            return {
                pokemonList: [],
                currentPage: 1,
                rows: 100,
                limit: 10,
                selectedPokemon: {},
                selectedPokemonList: []
            }
        },
        mounted() {
            this.getPokemons(this.currentPage, this.limit);
        },
        methods: {
            getPokemons(pageNumber, limit) {
                axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pageNumber}&limit=${limit}`).then(response => {
                    this.pokemonList = response.data.results;
                })
            },
            getPokemonDetail(pokemonUrl) {
                this.selectedPokemon = {};
                axios.get(pokemonUrl).then(response => {
                    this.selectedPokemon = response.data;
                })
            },
            onChangePagination(pageNumber) {
                this.getPokemons(pageNumber, this.limit);
            },
            onClickPokemon(pokemonUrl) {
                this.getPokemonDetail(pokemonUrl);
            },
            onClickOK() {
                this.selectedPokemonList.push(this.selectedPokemon);
                this.$emit('onSelectedPokemonList', this.selectedPokemonList)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .showcase {
        flex: 1 1 100%;
        max-width: 25%;
        min-width: 25%;
        display: flex;
        flex-direction: column;
        padding: 4px 16px 4px;

        header, h2, section, footer, main {
            width: 100%
        }

        h2 {
            margin: 0px;
        }

        section {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;

            button {
                flex: 1 1 100%;
                max-width: 45%;
                min-width: 45%;
                height: 35px;
                margin-bottom: 16px;
                background-color: #ffffff7d;
                cursor: pointer;
            }
        }

        footer {
            margin-top: 48px;
            display: flex;
            justify-content: center;
        }
    }
    .modal-body {
        main {
            display: flex !important;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            nav {
                display: flex !important;
                flex-direction: column;

                .abilities {
                    display: flex;
                    flex-direction: column;

                }
            }
        }
    }
</style>
