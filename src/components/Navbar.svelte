<script lang="ts">
	let menuList = [
		{ path: "/", name: "Home" },
		{ path: "/about", name: "About" },
	];
</script>

<nav class="navbar">
	<ul class="menu">
		{#each menuList as menuItem}
			<li><a href={menuItem.path}>{menuItem.name}</a></li>
		{/each}
	</ul>
</nav>

<style>
	.navbar {
		min-width: 100%;
		background: inherit;
		backdrop-filter: blur(20px);
		position: sticky;
		top: 0;
		left: 0;
		height: 54px;
		z-index: 100;
	}
	.menu {
		list-style: none;
		display: flex;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		padding: 15px;
	}
	.menu li {
		margin: 0 12px;
	}

	.menu a {
		display: inline-block; /* Делаем элемент поддерживающим transform */
		padding: 10px;
		color: #000;
		text-decoration: none;
		border: 1px solid #000;
		transition: all 0.2s ease-out;
	}
	.menu a:active {
		transform: scale(0.9);
	}
</style>
