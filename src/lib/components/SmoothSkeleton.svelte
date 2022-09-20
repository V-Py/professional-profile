<script lang="ts">

</script>


<div class="skeleton">
    <div class="skeleton__block"></div>
    <div class="skeleton__block"></div>
    <div class="skeleton__block"></div>
</div>



<style>
    *{
        box-sizing:border-box;
    }

    .skeleton{
        --surface:hsl(0,0%,90%);
        --block:hsl(280 80% 80%);
        --padding:1rem;
        --loader: hsl(35 100% 80%);
        gap:calc(var(--padding) * 0.5);
        border-radius:calc(var(--padding) * 1.5);

        padding:var(--padding);
        width:clamp(200px, 50vmin, 20rem);
        display:grid;
        grid-template: 1fr 1fr / 25% 1fr;
        background:var(--surface);
    }

    .skeleton__block{
        /* background:linear-gradient(-75deg, transparent, var(--loader), transparent)0 0 / 200% 100, var(--block); */
        background: linear-gradient(
            -75deg,
            transparent 40%,
            var(--loader),
            transparent 60%
        ) 0 0 / 200% 100%,
            var(--block);
        border-radius:calc(var(--padding) * 0.5);
        animation: load 2s infinite linear;
        background-attachment: fixed;
    }

    .skeleton__block:first-of-type{
        grid-row:1/-1;
        aspect-ratio: 1;
    }

    .skeleton__block:last-of-type{
        width:65%;
    }

    @keyframes load{
        to{
            background-position:200% 0;
        }
    }
</style>