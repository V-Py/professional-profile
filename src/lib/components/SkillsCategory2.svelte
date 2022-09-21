<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import {fade, scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import {elasticInOut} from 'svelte/easing';

    let positions_cards = [0, 1, 2];
    let colors = ["green", "blue", "red", "yellow", "orange", "beige", "lime-green"];

    const dispatch = createEventDispatcher();
    export let categories = [];
    let bool_animate = false;

    function animate(){
        const button = this;
        button.disabled = true;
        bool_animate = !bool_animate;

        setTimeout(function(){
            bool_animate = false;

            if(positions_cards.indexOf(1) == 1) {
                positions_cards = [1, 2, 0]
            }else if(positions_cards.indexOf(1) == 0) {
                positions_cards = [2, 0, 1]
            }else if(positions_cards.indexOf(1) == 2){
                positions_cards = [0, 1, 2]
            }

            button.disabled = false;
        }, 1000);
    }
</script>

<button type="button" on:click={animate}>Animate</button>

<div class="container">
    <div class="inner">

        {#each categories as category, index}
            <div class="card" class:secondposition={positions_cards.indexOf(index) == 2} class:firstposition={positions_cards.indexOf(index) == 1} class:bg={positions_cards.indexOf(index) != 0} class:animate={bool_animate}>
                <div class="title {category.bgcolor}">
                    <span class="text">{category.label}</span>
                    <!-- <span class="number">{logo}</span> -->
                </div>
                <div class="skills">
                    <div class="arrow">
                        <!-- <button class="arrow-button" type="button" on:click={()=>{dispatch('move', {direction:'previous'})}}> -->
                        <!-- <button class="arrow-button" type="button" on:click={animate}>
                            <img src="/src/img/arrow-left-solid.svg" alt="arrow" width="15px"/>
                        </button> -->
                    </div>
                    <div class="skills-container">
                        {#each category.skills as skill} 
                            <div class="badge {colors[Math.round(Math.random()*(5))]}">{skill.label}</div>
                        {/each}
                    </div>
                    <div class="arrow">
                        <!-- <button class="arrow-button" type="button" on:click={()=>{dispatch('move', {direction:'next'})}}>
                            <img src="/src/img/arrow-right-solid.svg" alt="arrow" width="15px"/>
                        </button> -->
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>


<style>

    .card{
        top:0px;
        left:0px;
        position:absolute;
        width:90%;
        height:90%;
        border:2px solid rgba(0,0,0,1);
        background:white;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        align-items:center;
        z-index:10;
        transition: all 0.1s ease-in;

    }

    .card.animate{
        animation-name:maincard-out;
        animation-duration:1s;
        animation-fill-mode:forwards;
    }

    .firstposition.animate{
        animation-name:firstposition-in;
        animation-duration:1s;
        animation-fill-mode:forwards;
    }

    .secondposition.animate{
        animation-name:secondposition-in;
        animation-duration:1s;
        animation-fill-mode:forwards;
    }

    @keyframes firstposition-in{
        0%{top:4px;left:4px;z-index:9;}
        50%{top:2px;left:2px;z-index:9;}
        100%{top:0px; left:0px;z-index:10;}
    }

    @keyframes secondposition-in{
        0%{top:8px;left:8px;z-index:8;}
        50%{top:6x;left:6px;z-index:8;}
        100%{top:4px; left:4px;z-index:9;}
    }

    @keyframes maincard-out{
        0%{top:0px;left:0px;z-index:10;}
        50%{top:-100px;left:12px;z-index:10;}
        100%{top:8px; left:8px;z-index:5;}
    }

    .container{
        width:90%;
        height:95%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:20px;
    }

    .inner{
        position:relative;
        left:5%;
        width:100%;
        height:100%;
    }

    .skills{
        flex:3;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .arrow{
        flex:1;
        display:flex;
        justify-content:center;
        height:100%;
        width:100%;
    }

    .arrow button{
        background:transparent;
        border:none;
        padding:3px;
        border-radius:5px;
        position:relative;
        z-index:1;
        width:100%;
    }
    
    .arrow button:hover{
        cursor:pointer;
        background:rgba(0,0,0,0.05);
    }


    .skills-container{
        flex:8;
        /* width:10%; */
        height:90%;
        display:flex;
        align-items:center;
        justify-content:center;
        /* justify-content: space-around; */
        flex-wrap: wrap;
    }

    .badge{
        font-size:14px;
        padding: 2px 6px;
        margin:2px;
        background:lightseagreen;
        border:none;
        border-radius:50px;
        display:block;
        height:fit-content;
    }


    .bg{
        left:5px;
        border-radius:5px;
        position:absolute;
        width:90%;
        height:90%;
        border:2px solid rgba(0,0,0,1);
        background:white;
    }

    .firstposition{
        top:4px;
        left:4px;
        z-index:9; 
    }

    .secondposition{
        top:8px;
        left:8px;
        z-index:8; 

        /* background:var(--brutal-red); */
    }

    .title{
        position:relative;
        width:100%;
        background:lightgreen;
        flex:1;
    }
    
    .blue{
        background-color:var(--brutal-blue);
    }

    .green{
        background-color:var(--brutal-green);
    }

    .yellow{
        background-color:var(--brutal-yellow);
    }

    .orange{
        background-color: var(--brutal-orange);
    }

    .red{
        background-color: var(--brutal-red);
    }

    .lime-green{
        background-color: var(--lime-green);
    }

    .beige{
        background-color: var(--brutal-beige);
    }

    .orange-red{
        background-color: var(--brutal-orange-red);
    }


    .title .text{
        font-size:24px;
        margin-left:15px;
    }
</style>