<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar is-fixed-top navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                <button class="button is-white" @click="scrollToRegion(1)">scroll to Kanto</button>
                <button class="button is-white" @click="scrollToRegion(152)">scroll to Johto</button>
                <button class="button is-white" @click="scrollToRegion(252)">scroll to Hoenn</button>
                <button class="button is-white" @click="scrollToRegion(387)">scroll to Sinnoh</button>
            </a>
        </div>
    </div>
</nav>
    <div class="container">
        <div v-for="pokemon in pokemons" :key="pokemon.name" :ref="pokemon.name">
            <PokemonCard :pokemon="pokemon"/>
        </div>
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
    methods: {
        scrollToRegion(idOfTheFirstPokemonOfTheGeneration){
            //console.log("$refs", this.$refs);
            if(idOfTheFirstPokemonOfTheGeneration == 1){
                this.$refs['bulbasaur'][0].scrollIntoView({behavior: 'smooth',}) 
            }else if(idOfTheFirstPokemonOfTheGeneration == 152){
                this.$refs['chikorita'][0].scrollIntoView({behavior: 'smooth'}) 
            }else if(idOfTheFirstPokemonOfTheGeneration == 252){
                this.$refs['treecko'][0].scrollIntoView({behavior: 'smooth'}) 
            }else if(idOfTheFirstPokemonOfTheGeneration == 387){
                this.$refs['turtwig'][0].scrollIntoView({behavior: 'smooth'}) 
            }    
        }
    },
     created(){
        PokeApiService.getPokemon()
        .then(response => {      
            this.pokemons = response.data['results']
            console.log(this.pokemons);
        })
        .catch(error => {
            console.log(error)
        })
    },
}
</script>

<style>

.container{
    display: flex;
    flex-wrap: wrap;
}

</style>
