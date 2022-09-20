<script lang="ts">
    import CardTriple from '$lib/components/CardTriple.svelte';
    // import SkillsCategory from '$lib/components/SkillsCategory.svelte';
    import SkillsCategory2 from '$lib/components/SkillsCategory2.svelte';

    let position = 0;
    let categories = [{label:'Front End', skills:[], bgcolor:"blue"}, {label:'Back End', skills:[], bgcolor:"purple"}, {label:'DevOps', skills:[], bgcolor:"yellow"}]


    function changeCategory(event){
        if(event.detail.direction == 'next') position = (position + 1 == categories.length ? 0 : position+1);
        if(event.detail.direction == 'previous') position = (position  == 0 ? categories.length - 1 : position-1);
    }
</script>

<div class="container">
    <SkillsCategory2 on:move={changeCategory} category={categories[position]} {categories}/>
</div>

<style>
    .container{
        grid-area:skills;
        display:flex;
        justify-content:center;
        align-items:center;
        /* background:darkblue; */
    }
</style>