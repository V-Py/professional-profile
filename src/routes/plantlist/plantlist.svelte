<script lang="ts">
    
    import CardSimple from "$lib/components/CardSimple.svelte";
    import BigCard from "$lib/components/BigCard.svelte";
    import PlantCard from "$lib/components/PlantCard.svelte";
    import { onMount } from "svelte";
    import { browser } from '$app/env';
    import {getPlants} from '$lib/class/services';


    let active = false;
    let number_plants = 6;
    let plants:{label:string, color:string, img:string, desc:string}[] = [];
    // let plants:{label:string, color:string, img:string, desc:string}[] = [
    //     {label:"Plante1", color:"green", img:"todo.png", desc:"content"},
    //     {label:"Plante2", color:"red", img:"todo.png", desc:"content"},
    //     {label:"Plante3", color:"purple", img:"todo.png", desc:"content"},
    //     {label:"Plante4", color:"yellow", img:"todo.png", desc:"content"},
    //     {label:"Plante5", color:"blue", img:"todo.png", desc:"content"},
    //     {label:"Plante6", color:"yellow", img:"todo.png", desc:"content"},
    //     {label:"Plante7", color:"green", img:"todo.png", desc:"content"},
    //     {label:"Plante8", color:"red", img:"todo.png", desc:"content"},
    //     {label:"Plante9", color:"purple", img:"todo.png", desc:"content"},
    //     {label:"Plante10", color:"yellow", img:"todo.png", desc:"content"},
    //     {label:"Plante11", color:"blue", img:"todo.png", desc:"content"},
    //     {label:"Plante12", color:"yellow", img:"todo.png", desc:"content"},
    // ]

    let plants_show:{label:string, color:string, img:string, desc:string}[] = []

    function addMorePlants(){
        let i = 1;
        while(plants.length > number_plants && i <= 3){
            plants_show.push(plants[number_plants])
            number_plants++;
            i++;
        }

        plants_show = [...plants_show];

        // plants.push({label:"Plante4X", color:"yellow", img:"todo.png", desc:"content"})
        // plants.push({label:"Plante5X", color:"blue", img:"todo.png", desc:"content"})
        // plants.push({label:"Plante6X", color:"red", img:"todo.png", desc:"content"})

        // plants = [...plants];
    }

    onMount(async ()=>{
        let limit = document.getElementById('limit');
        if (browser) {
            const handleIntersect = (entries, observer) => {
                console.log('OBSERVED');
                entries.forEach((entry) => {
                    // if (!morePostsAvailable()) {
                    //     observer.unobserve(entry.target);
                    // }
                    addMorePlants();
                });
            };
            const options = { threshold: 0.5, rootMargin: '-100% 0% 100%' };
            const observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(limit);
        }


        let res = await getPlants();
        //@ts-ignore
        plants = res.data;

        console.log('PLANTES', plants);
        for(let i=0; i<number_plants;i++){
            plants_show.push(plants[i]);
        }

        plants_show = [...plants_show];
    })


</script>

<svelte:head>

</svelte:head>


<div class="content">
    <div class="grid">
        {#each plants_show as plant, index}
            {@const number = index+1}
            <PlantCard 
                {plant}
                {number}
            />
        {/each}
    </div>

    <div class="right" class:active={active}>
        <button on:click={()=>{active = !active}}>
            Trigger
        </button>
    </div>
</div>
<div id="limit"></div>
<footer id="footer">{plants.length}</footer>


<style>
    .content{
        width:100%;
        display:flex;
        align-items:center;
        font-size:50px;
        background:#F2FAEA;
        font-family:"BebasKai";
    }

    .grid{
        padding-top:150px;
        /* padding-left:100px; */
        flex:3;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }

    .right{
        flex:0;
        display:none;
    }

    .active{
        flex:1;
        display:flex;

        /* display:none; */
    }
</style>