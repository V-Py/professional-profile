<script lang="ts">
    export let classes = '';
    export let text = 'Card';
</script>


<div class="card {classes}">
    {text}
</div>



<style>
    .card{
        /* width:75px; */
        /* height:75px; */
        padding:8px;
        border-radius:5px;
        border:5px solid #030303;
        box-shadow: rgba(0, 0, 0) 4px 4px;
        background:var(--brutal-purple);
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:10px;
        font-family:"BebasKai";
        font-size:30px;
    }

    .blue{
        background:var(--brutal-blue);
    }

    .green{
        background:var(--brutal-green);
    }

    .red{
        background:var(--brutal-red);
    }

    .yellow{
        background:var(--brutal-yellow);
    }

    /* --brutal-blue:#38dbff;
    --brutal-orange:#ffb443;
    --brutal-red:#ff5d5d;
    --brutal-yellow:#fff503;
    --brutal-green:#00ff75;
    --brutal-purple:#dd7dff;
    --brutal-pink:#defefe; */
</style>