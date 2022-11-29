<template>
    <div  class="container">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue';
import PokeApiService from '@/services/PokeApiService';

export default {
  name: 'PokemonView',
  components: {
    PokemonCard
  },
  data(){
        return{
            pokemons: null,
        }
    },
     created(){
        PokeApiService.getPokemon()
        .then(response => {      
            this.pokemons = response.data['results']
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style>

.container{
    display: flex;
    flex-wrap: wrap;
}

</style>
