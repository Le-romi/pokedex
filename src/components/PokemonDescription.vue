<template>
    <div class="description" v-if="desc">
        <div class="box box_informations">
            <router-link :to="{name: 'PokemonView'}"><button class="button is-medium">Go back</button></router-link>
            <div class="pokemon_title">       
                <figure class="image is-128x128">
                        <img :src="desc.sprites.back_default" alt="Placeholder image" height="50" width="50">
                </figure>     
                <figure class="image is-128x128">
                    <img :src="desc.sprites.front_default" alt="Placeholder image" height="50" width="50">
                </figure>
                <h1 class="pokemon_name">{{desc.name}}</h1>      
                <figure class="image is-128x128">
                        <img :src="desc.sprites.back_shiny" alt="Placeholder image" height="50" width="50">
                </figure>
    
                <figure class="image is-128x128">
                    <img :src="desc.sprites.front_shiny" alt="Placeholder image" height="50" width="50">
                </figure>    
            </div>      
            <div>{{desc.id}} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus, diam non venenatis malesuada, eros magna sodales orci, et bibendum arcu nisi sed sem. Phasellus nec tincidunt lacus. Nulla consequat justo viverra egestas semper. Vestibulum vestibulum, odio et eleifend iaculis, ante arcu ullamcorper dolor, id tincidunt est massa sit amet metus. Sed gravida, mauris sed placerat pretium, ipsum lorem pulvinar est, eget rutrum felis ante a velit. Nam sed magna metus. Sed tincidunt porta eros. Etiam gravida turpis dolor, in tristique est elementum eget. Cras posuere facilisis augue, at viverra augue. </div>
            <div class="pokemon_data">
                <div class="box_detail">
                    <table class="table">
                        <thead>
                            <tr>
                                <th v-for="stat in desc.stats" :key="stat.stat.name">{{stat.stat.name}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td v-for="base_stat in desc.stats" :key="base_stat">{{base_stat.base_stat}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul class="pokemon_types">
                        <li v-for="t in desc.types" :key="t.type.name"><figure class="image is-128x128"><img :src="require(`@/assets/types/${t.type.name}.png`)"/></figure></li>
                    </ul>
                </div>
                <img class="has-ratio" width="800" height="400" :src="getRegion(desc.id)"/>
            </div>
        </div>
    </div>
</template>
<script>

import PokeApiService from '@/services/PokeApiService';
export default{
    props: ['id'],
    data(){
        return {
            desc: null
        }
    },
    methods: {
        getRegion(id){
            if(id >= 0  && id <= 151){
                return require(`@/assets/regions/kanto.png`);
            } else if(id >= 152  && id <= 251){
                return require(`@/assets/regions/johto.jpg`);
            } else if(id >= 252  && id <= 386){
                return require(`@/assets/regions/hoenn.png`);
            } else {
                return require(`@/assets/regions/sinnoh.png`);
            }
        }
    },
    created(){
            PokeApiService.getPokemonDescription(this.id)
            .then(response => {      
                this.desc = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
}

</script>

<style>

.description{
    display: flex;
    margin: 100px;
    
}

.box_detail{
    display: flex;
    flex-direction: column;
}

.pokemon_title{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.pokemon_data{
    display: flex;
    justify-content: space-around;
    margin: 50px;
}

.pokemon_types{
    display: flex;
    justify-content: center;
    margin: 10px;
}

.table{
    margin: 50px;
}

.pokemon_name{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 200%;
    margin: 10px;
    display: inline;
    vertical-align: middle !important;
}

</style>