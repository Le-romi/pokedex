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
      <p>Weight of the pokémon - {{this.weight}} kg</p>
      <ul class="type_list">
        <li v-for="t in this.types" :key="t.name" class="type">{{t.type.name}}</li>
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
            id: null,
            types: null,
            weight: null
        }
    },
    created(){
        PokeApiService.getPokemonDescription(this.pokemon.url.slice(34))
        .then(response => {      
            this.desc = response.data
            this.img = this.desc.sprites.front_default
            this.id = this.desc.id
            this.types = this.desc.types
            this.weight = this.desc.weight
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

.card:hover{
    width: 300px;
    margin: 10px;
    box-shadow: 1px 1px 1px 1px grey;
}

.type_list{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0px;
}

.type{
  margin: 0px;
}


</style>