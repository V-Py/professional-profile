<script lang="ts">
    import Letter from '$lib/components/Letter.svelte';
</script>

<div class="container">
    <div class="firstname">
        <Letter text="V"/>
        <Letter text="A" classes="blue"/>
        <Letter text="L" classes="green"/>
        <Letter text="E" classes="yellow"/>
        <Letter text="N" classes="red"/>
        <Letter text="T"/>
        <Letter text="I" classes="red"/>
        <Letter text="N" classes="yellow"/>
    </div>
    <div class="lastname">
        <Letter text="P" classes="blue"/>
        <Letter text="Y" classes="yellow"/>
    </div>
</div>


<style>
    .container{
        display:grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "firstname"
        "lastname";
        grid-area:name;
        position:relative;
    }

    .firstname, .lastname{
        display:flex;
        justify-content: center;
        align-items:center;
    }
</style>