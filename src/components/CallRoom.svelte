<script>
	import { onMount } from "svelte";
	/** Пропсы передаются из родителя */
	export let channel;
	export let uid;
	export let token;

	/**
	 * Динамический импорт VideoCall.svelte
	 */
	let VideoCall;
	let inCall = true;

	onMount(async () => {
		const module = await import("./VideoCall.svelte");
		VideoCall = module.default;
	});
</script>

<h1>Astro x Agora</h1>

{#if inCall}
	<div style="text-align: center">
		<button
			on:click={() => {
				inCall = false;
			}}>End Call</button
		>
	</div>
	<br />
	<svelte:component this={VideoCall} {channel} {uid} {token} />
{:else}
	<div style="text-align: center">
		<button on:click={() => (inCall = true)}>Rejoin</button>
		<a href="/"><button>Back</button></a>
	</div>
{/if}
