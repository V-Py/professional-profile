<script lang="ts">
    import CardSimple from "$lib/components/CardSimple.svelte";
    import BigCard from "$lib/components/BigCard.svelte";
</script>

<svelte:head>

</svelte:head>
<div class="content">
    <div class="grid-left">
        <CardSimple />
        <CardSimple classes={"green"}/>
        <CardSimple classes={"red"}/>
        <CardSimple classes={"yellow"}/>
        <CardSimple classes={"blue"}/>
    </div>

    <div class="grid-right">
        <BigCard classes={"green"}/>
        <BigCard classes={"red"}/>
        <BigCard />
        <BigCard classes={"yellow"}/>

    </div>

</div>


<style>
    .content{
        /* height:100%; */
        width:100%;
        display:flex;
        /* justify-content:center; */
        align-items:center;
        font-size:50px;
        background:#F2FAEA;
        font-family:"BebasKai";
    }

    .grid-left{
        flex:1;
        display:flex;
        flex-direction:column;
        padding:50px;
    }

    .grid-right{
        padding-top:150px;
        flex:2;
        display:flex;
        flex-wrap:wrap
    }
</style>