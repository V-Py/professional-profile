<script lang="ts">
    import {goto} from '$app/navigation';
</script>

<nav>
    <ul>
        <li on:click={()=>{goto('/')}}>Home</li>
        <li on:click={()=>{goto('/curriculum')}}>Curriculum</li>
        <li on:click={()=>{goto('/contact')}}>Contact</li>
    </ul>
</nav>

<style>
    nav{
        position:absolute;
        top:0;
        right:50px;
        color:black;
        z-index:15;
        font-family:"BebasKai";
    }

    ul{
        list-style:none;
        display:flex;
    }

    li{
        padding:10px;
        margin:10px;
        font-size:20px;
    }

    li:hover{
        cursor:pointer;
        background:rgba(0,0,0,0.1);
    }
</style>