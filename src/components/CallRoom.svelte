<script lang="ts">
	import { onMount } from "svelte";
	/** Пропсы передаются из родителя */
	export let channel;
	export let uid;
	export let token;

	/**
	 * Динамический импорт VideoCall.svelte
	 */
	let VideoCall: __sveltets_2_IsomorphicComponent<{ channel: string; uid: number; token: string; }, { [evt: string]: CustomEvent<any>; }, {}, {}, string>;
	let inCall = true;

	onMount(async () => {
		const module = await import("./VideoCall.svelte");
		VideoCall = module.default;
	});
</script>

{#if inCall}
	<div style="text-align: center">
		<button
			class="btn btn-error"
			on:click={() => {
				inCall = false;
			}}>End Call</button
		>
	</div>
	<br />
	<svelte:component this={VideoCall} {channel} {uid} {token} />
{:else}
	<div class="join flex justify-center">
		<button class="btn join-item" on:click={() => (inCall = true)}
			>Rejoin</button
		>
		<a href="/"><button class="btn join-item btn-error">Back</button></a>
	</div>
{/if}
