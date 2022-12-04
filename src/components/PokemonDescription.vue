<template>
<div class="detail" v-if="desc">
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
        <h1>{{desc.name}}</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus, diam non venenatis malesuada, eros magna sodales orci, et bibendum arcu nisi sed sem. Phasellus nec tincidunt lacus. Nulla consequat justo viverra egestas semper. Vestibulum vestibulum, odio et eleifend iaculis, ante arcu ullamcorper dolor, id tincidunt est massa sit amet metus. Sed gravida, mauris sed placerat pretium, ipsum lorem pulvinar est, eget rutrum felis ante a velit. Nam sed magna metus. Sed tincidunt porta eros. Etiam gravida turpis dolor, in tristique est elementum eget. Cras posuere facilisis augue, at viverra augue. </div>
        <div>

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
    }
}

</script>

<style>

.detail{
    display: flex;
    margin: 100px;
    
}

.box_img{
    width: 200px;
    text-align: center;
    margin: 0rem !important;
}

.box_informations{

}

</style>