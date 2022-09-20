<script lang="ts">
    import ColouredHeadCard from "$lib/components/ColouredHeadCard.svelte";
    import SmoothSkeleton from "$lib/components/SmoothSkeleton.svelte";


</script>

<svelte:head>

</svelte:head>


<div class="content">
    <ColouredHeadCard  />
    <SmoothSkeleton />
    <SmoothSkeleton />
    <SmoothSkeleton />
</div>


<style>
    .content{
        height:100%;
        width:100%;
        display:flex;
        flex-direction: column;
        justify-content:space-around;
        align-items:center;
        font-size:50px;
        background:var(--brutal-beige);
        font-family:"BebasKai";

    }
</style>