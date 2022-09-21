<script lang="ts">
    import Experience from '$lib/components/Experience.svelte';

</script>

<div class="container">
    <Experience />
</div>

<style>
   .container{
        grid-area:experiences;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:10px;
    }
</style>