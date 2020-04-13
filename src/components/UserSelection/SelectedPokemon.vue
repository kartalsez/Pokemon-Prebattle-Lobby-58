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
    </div>
</template>

<script>
    export default {
        name: 'SelectedPokemon',
        props: {
            selectedPokemon: Object
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .selected-pokemon {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p, {
            display: flex;
            flex-direction: column;

            span {
                text-align: center
            }
        }
    }
</style>
