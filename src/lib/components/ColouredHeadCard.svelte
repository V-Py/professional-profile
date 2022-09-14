<script lang="ts">
    // export let classes = '';
    // export let
</script>


<div style="position:relative;width:450px;height:350px;">
    <div class="card">
        <div class="title blue">
            <span class="text">Text</span>
        </div>
        <span class="content">Content</span>
    </div>
</div>


<style>
    .card{
        top:-15px;
        left:-15px;
        position:absolute;
        width:400px;
        height:300px;
        border:5px solid #030303;
        box-shadow: rgba(0, 0, 0) 4px 4px;
        background:white;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        align-items:center;
        z-index:10;
        transition: all 0.1s ease-in;
    }

    .title{
        position:relative;
        width:100%;
        border-bottom:5px solid #030303;
        display:flex;
        justify-content:center;
        align-items:center;
        height:50px;
    }

    .title .text{
        font-size:24px;
        margin-left:15px;
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