<template>
    <div class="description" v-if="desc">
        <div class="box box_img">
            <div>
                <ul class="img_list">
                    <li>        
                        <figure class="image is-128x128">
                            <img :src="desc.sprites.back_default" alt="Placeholder image" height="50" width="50">
                        </figure>
                    </li>
                    <li>        
                        <figure class="image is-128x128">
                            <img :src="desc.sprites.front_default" alt="Placeholder image" height="50" width="50">
                        </figure>
                    </li>
                    <li>        
                        <figure class="image is-128x128">
                            <img :src="desc.sprites.back_shiny" alt="Placeholder image" height="50" width="50">
                        </figure>
                    </li>
                    <li>        
                        <figure class="image is-128x128">
                            <img :src="desc.sprites.front_shiny" alt="Placeholder image" height="50" width="50">
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
        <div class="box box_informations">
            <h1 class="pokemon_name">{{desc.name}}</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus, diam non venenatis malesuada, eros magna sodales orci, et bibendum arcu nisi sed sem. Phasellus nec tincidunt lacus. Nulla consequat justo viverra egestas semper. Vestibulum vestibulum, odio et eleifend iaculis, ante arcu ullamcorper dolor, id tincidunt est massa sit amet metus. Sed gravida, mauris sed placerat pretium, ipsum lorem pulvinar est, eget rutrum felis ante a velit. Nam sed magna metus. Sed tincidunt porta eros. Etiam gravida turpis dolor, in tristique est elementum eget. Cras posuere facilisis augue, at viverra augue. </div>
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
                    <li v-for="t in desc.types" :key="t.type.name"><figure class="image is-128x128"><img :src="require(`@/assets/${t.type.name}.png`)"/></figure></li>
                </ul>
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

.pokemon_types{
    display: flex;
    justify-content: center;
    margin: 10px;
}

.box_img{
    width: 200px;
    text-align: center;
    margin: 0rem !important;
}

.table{
    margin: 50px;
}

.pokemon_name{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 200%;
    margin: 10px;
}

</style>