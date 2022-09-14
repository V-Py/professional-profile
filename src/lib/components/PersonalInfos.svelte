<script lang="ts">
    export let me;

    const {firstname, lastname, age, email, location, phone} = me;

</script>

<div class="container">
    <div class="me">
        <div class="name">
            <div class="circle">1</div> 
            <span style="margin-left:15px;">
                {firstname}
                {lastname}
            </span>
        </div>
        <div class="age">
            <div class="age-container">{age}</div>
        </div>
    </div>
    
    <div class="coordinates">
        <div class="email">{email}</div>
        <div class="phone">{phone}</div>
    </div>
    <div class="location">{location}</div>

</div>
<style>
   .container{
        grid-area:personal;
        padding:10px;
        /* background:var(--bitter-lemon); */
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows:repeat(3, 2fr) 1fr;
        column-gap:5px;
        row-gap:5px;
        align-items:center;
        grid-template-areas: 
        "me me"
        "coordinates coordinates"
        "coordinates coordinates"    
        "location location";
        border:2px solid #030303;
        box-shadow: rgba(0, 0, 0) 4px 4px;
        border-radius:10px;
        font-size:14px;
    }

    .circle{
        background:var(--lime-green);
        /* color:white; */
        width:15px;
        height:15px;
        border-radius:50%;
        border:2px solid #030303;
        box-shadow: rgba(0, 0, 0) 4px 4px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:10px;
        font-weight:bold;
    }

    .me{
        display:flex;
        grid-area:me;
    }

    .name{
        display:flex;
        justify-content: center;
        align-items:center;
        flex:2;
    }

    .coordinates{
        /* height:100%; */
        padding:3px;
        grid-area:coordinates;
        font-size:12px;
        border-radius:5px;
        background:var(--lime-green);
        /* color:white; */
        border:2px solid #030303;
        box-shadow: rgba(0, 0, 0) 4px 4px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items:center;
    }


    .age{
        flex:1;
    }

    .age-container{
        padding:8px;
        border-radius:5px;
        background:var(--lime-green);
        /* color:white; */
        width:fit-content;
        border:2px solid #030303;
        box-shadow: rgba(0, 0, 0) 4px 4px;
    }

    .location{
        grid-area:location;
        display:flex;
        justify-content:center;
        align-items:center;
        /* background-color:var(--brutal-blue); */
        padding:3px;
    }
</style>