<template>
	<section class="base-map">
		<canvas class="base-map__canvas"></canvas>
		<div class="base-map__overlay">
			<slot></slot>
		</div>
	</section>
</template>

<style scoped lang="scss">
.base-map {
	position: relative;
	background-color: rgb(173, 173, 173);

	.base-map__canvas {
		width: 100%;
		height: 100%;
	}

	.base-map__overlay {
		display: flex;
		position: absolute;
		inset: 0;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 1.6rem;
	}
}
</style>
