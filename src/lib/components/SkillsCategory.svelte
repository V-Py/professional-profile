<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let category;
    export let skills = [{label:"css"}, {label:"html"}, {label:"javascript"}, {label:"css"}, {label:"html"}, {label:"javascript"}, {label:"css"}, {label:"html"}, {label:"javascript"}, {label:"css"}, {label:"html"}, {label:"javascript"}];
    export let logo = 1;

</script>

<div class="container">
    <div class="inner">
        <div class="secondbg bg"></div>
        <div class="firstbg bg"></div>
        <div class="card">
            <div class="title">
                <span class="text">{category.label}</span>
                <!-- <span class="number">{logo}</span> -->
            </div>
            <div class="skills">
                <div class="arrow">
                    <button class="arrow-button" type="button" on:click={()=>{dispatch('move', {direction:'previous'})}}>
                        <img src="/src/img/arrow-left-solid.svg" alt="arrow" width="15px"/>
                    </button>
                </div>
                <div class="skills-container">
                    {#each skills as skill} 
                        <div class="badge">{skill.label}</div>
                    {/each}
                </div>
                <div class="arrow">
                    <button class="arrow-button" type="button" on:click={()=>{dispatch('move', {direction:'next'})}}>
                        <img src="/src/img/arrow-right-solid.svg" alt="arrow" width="15px"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
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

    .card{
        /* top:-15px;
        left:-15px; */
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

    .bg{
        left:5px;
        border-radius:5px;
        position:absolute;
        width:90%;
        height:90%;
        border:2px solid rgba(0,0,0,1);
        background:white;
        z-index:9; 
    }

    .firstbg{
        top:4px;
        left:4px;
        /* background:var(--brutal-purple); */
    }

    .secondbg{
        top:8px;
        left:8px;
        /* background:var(--brutal-red); */
    }

    .title{
        position:relative;
        width:100%;
        background:lightgreen;
        flex:1;
    }

    .title .text{
        font-size:24px;
        margin-left:15px;
    }
</style>