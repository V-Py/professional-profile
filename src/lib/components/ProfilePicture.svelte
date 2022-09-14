<script lang="ts">

</script>

<div class="container">
    <img class="profile-picture" alt="me" src="/src/img/photo.jpg" />
</div>


<style>


    .container{
        display:flex;
        justify-content:center;
        align-items:center;
        grid-area:picture;
        /* background:red; */
        position:relative;
    }
    
    .profile-picture{
        width:150px;
        height:150px;
        position:absolute;
        border:5px solid #030303;
        box-shadow: rgba(0, 0, 0) 4px 4px;
        object-fit:cover;
        border:5px solid black;
    }

    @media (min-width:320px) and (max-width: 480px){
        .profile-picture{
            width:100px;
            height:100px;
        }
    }

</style>