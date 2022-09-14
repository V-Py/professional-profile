<script lang="ts">
	import {navigating, page} from '$app/stores';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

</script>
<Header />

<!-- {#if $page.url.pathname != '/login'}
{/if} -->

<main>
	<slot />
</main>

<style>
</style>
