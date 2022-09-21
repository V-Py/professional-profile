<script lang="ts">
    import CardTriple from '$lib/components/CardTriple.svelte';
    // import SkillsCategory from '$lib/components/SkillsCategory.svelte';
    import SkillsCategory2 from '$lib/components/SkillsCategory2.svelte';

    let position = 0;
    let categories = [{
        label:'Front End', 
        skills:[{label:"css"}, {label:"html"}, {label:"javascript"}, {label:"tailwind"}, {label:"Svelte"}, {label:"bootstrap"}, {label:"sass"}, {label:"todo"}], 
        bgcolor:"blue"
    }, {
        label:'Back End', 
        skills:[{label:"php"}, {label:"node.js"}, {label:"javascript"}, {label:"svelte kit"}, {label:"sql"}, {label:"phpmyadmin"}, {label:"dolibarr"}, {label:"todo"}], 
        bgcolor:"purple"
    }, {
        label:'DevOps', 
        skills:[{label:"github"}, {label:"bitbucket"}, {label:"jira"}, {label:"sync"}, {label:"Notion"}], 
        bgcolor:"yellow"
    }]


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