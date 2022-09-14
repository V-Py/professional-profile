<script lang="ts">
</script>

<div style="width:90%;height:90%;display:flex;justify-content:center;align-items:center;margin-top:20px;">
    <div style="position:relative;left:5%;width:100%;height:100%;">
        <!-- <div class="thirdbg bg"></div> -->
        <div class="secondbg bg"></div>
        <div class="firstbg bg"></div>
        <div class="card">
            <div class="title">
                <span class="text">Text</span>
                <span class="number">1</span>
            </div>
        </div>
    </div>
</div>


<style>
    .card{
        /* top:-15px;
        left:-15px; */
        position:absolute;
        width:90%;
        height:90%;
        border:2px solid rgba(0,0,0,1);
        background:white;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        align-items:center;
        z-index:10;
        transition: all 0.1s ease-in;
    }

    .bg{
        left:5px;
        border-radius:5px;
        position:absolute;
        width:90%;
        height:90%;
        border:2px solid rgba(0,0,0,1);
        background:white;
        z-index:9; 
    }

    .firstbg{
        top:4px;
        left:4px;
        /* background:var(--brutal-purple); */
    }

    .secondbg{
        top:8px;
        left:8px;
        /* background:var(--brutal-red); */
    }

    .thirdbg{
        top:15px;
        left:15px;
        /* background:var(--brutal-yellow); */
    }

    .title{
        position:relative;
        width:100%;
    }

    .title .text{
        font-size:24px;
        margin-left:15px;
    }

    .title .number{
        position:absolute;
        top:10px;
        right:10px;
        height:40px;
        width:40px;
        border-radius: 50%;
        background:var(--brutal-purple);
        color:black;
        border:1px solid black;
        font-size:12px;
        display:flex;
        justify-content: center;
        align-items:center;
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