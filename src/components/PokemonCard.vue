<template>
<div v-if="pokemon" class="card">
  <div class="card-image">
    <figure class="image is-128x128">
      <img :src="this.img" alt="Placeholder image" height="50" width="50">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-6">{{pokemon.name}}</p>
        <p class="title is-6"></p>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="type in this.desc.types" :key="type.type.name">{{type.type.name}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

import PokeApiService from '@/services/PokeApiService';

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
            img: null,
            id: null
        }
    },
    created(){
        PokeApiService.getPokemonDescription(this.pokemon.url.slice(34))
        .then(response => {      
            this.desc = response.data
            this.img = this.desc.sprites.front_default
            this.id = this.desc.id
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style>

.card{
    width: 300px;
    margin: 10px;
}


</style>