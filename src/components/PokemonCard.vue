<template>
<div v-if="pokemon" class="card">
  <div class="card-image">
    <figure class="image is-128x128">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Placeholder image" height="50" width="50">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-6">{{pokemon.name}}</p>
        <p class="title is-6">L'url {{pokemon.url.slice(-2)}}</p>
      </div>
    </div>
    <div class="content">
      Un super pokémon 
    </div>
  </div>
</div>
</template>

<script>

export default{


    name: 'PokemonCard',
    props: {
        pokemon: {
        type: Object,
        required: true
        },
    },
    data(){
        return{
            desc: null,
        }
    },
}
</script>

<style>

.card{
    width: 300px;
    margin: 10px;
}


</style>