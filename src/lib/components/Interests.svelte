<script lang="ts">
</script>
<div class="container">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
</div>

<style>
    .container{
        grid-area:interests;
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows:1fr 1fr;
        align-items: center;
        justify-items:center;
        row-gap:15px;
        column-gap:15px;
        /* background:darkblue; */
    }

    .card{
        border:1px solid black;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
</style>