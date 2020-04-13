<template>
    <div class="pokemon-basic-info">
        <main>
            <img v-bind:src="selectedPokemon.sprites ? selectedPokemon.sprites.front_default : ''">
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
    </div>
</template>

<script>

export default {
    name: 'PokemonBasicInfo',
    props: {
        selectedPokemon: Object
    }
}
</script>

<style scoped lang="scss">
    .pokemon-basic-info {
        width: 100%;
        main {
            width: 100%;
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
