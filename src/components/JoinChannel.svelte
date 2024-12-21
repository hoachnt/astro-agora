<script lang="ts">
	let channel = "test";
	let uid = 0;
	const handleClick = () => {
		console.log("yeah suka");
		window.location.href = `/call/${channel}?uid=${uid}`;
	};
</script>

<div class="max-w-lg m-auto">
	<div class="space-y-3">
		<label class="input input-bordered flex items-center gap-2">
			Channel Name:
			<input
				bind:value={channel}
				name="channel"
				type="text"
				class="grow"
			/>
		</label>
		<label class="input input-bordered flex items-center gap-2">
			UID:
			<input bind:value={uid} name="uid" type="number" class="grow" />
		</label>
		<div class="flex justify-end">
			<button class="btn" on:click={handleClick}>Join Channel</button>
		</div>
	</div>
</div>
