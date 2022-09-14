<script lang="ts">
    import CardSimple from "$lib/components/CardSimple.svelte";
    import SkillCard from "$lib/components/SkillCard.svelte";
    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';
    import { onMount } from "svelte";

    import ProfilePicture from '$lib/components/ProfilePicture.svelte';
    import PersonalInfos from '$lib/components/PersonalInfos.svelte';
    import Name from '$lib/components/Name.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Interests from '$lib/components/Interests.svelte';
    import Experiences from '$lib/components/Experiences.svelte';

    let interior_rect;

    let left = tweened(0, {
        duration:4000,
    })

    let top = tweened(0, {
        duration:2000
    })

    let ratio;

    let me = {
        firstname:'Valentin',
        lastname:'Py',
        birthdate:'1992-08-31',
        age:'30',
        email:'valentin.pyb@gmail.com',
        location:'Rhône-Alpes',
        phone:'06 80 98 15 97',
        languages:[{label:'french', level:'native'},{label:'english', level:'professional'},{label:'italian', level:'occasional'}],
        front_end:[{label:"Javascript"}, {label:"Typescript"}, {label:"Svelte/SvelteKit"}, {label:"Vitest"}, {label:"TailwindCSS"}, {label:"SCSS"}],
        back_end:[],
        devops:[],
        pro_skills:[],
        general_skills:[],
        diplomas:[],
        interests:[],
        experiences:[]
    }

    function move(variable=null, x=null, y=null){

    }

    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    async function permanentAnimation(){
        let step = 1;
        do{
            switch(step){
                case 1:
                    top.set(interior_rect.height);
                    step++;
                    await sleep(2000*ratio);
                    break;
                case 2:
                    left.set(interior_rect.width);
                    step++;
                    await sleep(2000);
                    break;
                case 3:
                    top.set(0);
                    step++;
                    await sleep(2000*ratio);
                    break;
                case 4:
                    top.set(0);
                    left.set(0);
                    step = 1;
                    await sleep(2000);
                    break;
                default:
                    step = 5;
                    break;
            }
        } while(step < 5)
    }

    onMount(()=>{
        // const interior = document.getElementById('interior');
        // interior_rect = interior.getBoundingClientRect();
        // ratio = interior_rect.width / interior_rect.height;

        // left = tweened(0, {
        //     duration:2000,
        // })

        // top = tweened(0, {
        //     duration:2000*ratio
        // })

        // permanentAnimation();
        // TODO : récupérer le ratio hauteur/largeur pour avoir des temps de parcours similaires sur chaque arête
        // setTimeout(function(){
        //     left.set(250);
        // }, 2000);
    })

</script>

<svelte:head>
</svelte:head>


<div class="content">
    <!-- <div id="interior" class="interior">
        <div class="circle" style:left="{$left}px" style:top="{$top}px">

        </div>
    </div> -->

    <div class="grid">
        <ProfilePicture />
        <PersonalInfos {me}/>
        <Interests />
        <Skills />
        <Experiences />
        <Footer />
    </div>
</div>  


<style>
    .content{
        width:100%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items:center;
    }

    .grid{
        width:95%;
        height:90%;
        display:grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows:2fr 3fr 1fr;
        grid-template-areas: 
        "picture personal personal personal personal interests"
        "skills skills skills experiences experiences experiences"
        "footer footer footer footer footer footer";
        font-family:"BebasKai";
    }

    @media (min-width:320px) and (max-width: 480px){
        .grid{
            width:95%;
            margin-top:120px;
            height:90%;
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows:2fr 2fr 2fr 2fr 1fr;
            grid-template-areas: 
            "picture personal"
            "skills skills"
            "experiences experiences"
            "interests interests"
            "footer footer";
            font-family:"BebasKai";
        }
    }



    .interior{
        height:80%;
        width:90%;
        background:orange;
        position:relative;
    }

    .circle{
        width:50px;
        height:50px;
        position:absolute;
        /* top:0px; */
        /* left:0px; */
        background:black;
        border-radius:50%;
        /* animation: moveAround 5s infinite; */
    }

    /* @keyframes moveAround{
        0%{top:0px;left:0px;}
        25%{top:100px;left:0px;}
        50%{top:100px;left:100px;}
        75%{top:0px;left:100px;}
        1000%{top:0px;left:0px;}
    } */
</style>