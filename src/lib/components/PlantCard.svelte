<script lang="ts">
    import { onMount } from "svelte";


    // export let classes = '';
    export let plant = {};
    export let number;


    onMount(()=>{
        console.log('PLANT', plant);
    })
</script>


<div style="position:relative;width:450px;height:350px;">
    <div class="background {plant?.color}">
    </div>
    <div class="card">
        <div class="title">
            <span class="text">{plant.label}</span>
            <span class="number {plant?.color}">{number}</span>
        </div>
        <div class="description">
            {plant.description}
        </div>
    </div>
</div>


<style>
    .card{
        top:-15px;
        left:-15px;
        position:absolute;
        width:400px;
        height:300px;
        border:1px solid rgba(0,0,0,1);
        background:white;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        align-items:center;
        z-index:10;
        transition: all 0.1s ease-in;
    }

    .background{
        top:0;
        left:0;
        border-radius:5px;
        position:absolute;
        width:400px;
        height:300px;
        background:var(--brutal-purple);
        border:1px solid rgba(0,0,0,1);
        z-index:9;
    }

    .card:hover{
        top:0;
        left:0;
        cursor:pointer;
    }

    .title{
        position:relative;
        width:100%;
    }

    .title .text{
        font-size:24px;
        margin-left:15px;
    }

    .title .number{
        position:absolute;
        top:10px;
        right:10px;
        height:40px;
        width:40px;
        border-radius: 50%;
        background:var(--brutal-purple);
        color:black;
        border:1px solid black;
        font-size:12px;
        display:flex;
        justify-content: center;
        align-items:center;
    }

    .description{
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        padding:10px;
        font-size:12px;
        font-weight:normal;
        text-transform:none;
    }

    .blue{
        background:var(--brutal-blue) !important;
    }

    .green{
        background:var(--brutal-green) !important;
    }

    .red{
        background:var(--brutal-red) !important;
    }

    .yellow{
        background:var(--brutal-yellow) !important;
    }

    .purple{
        background:var(--brutal-purple) !important;
    }
</style>