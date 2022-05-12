<script setup lang="ts"></script>

<template>
	<button class="fab">
		<span class="fab__icon"><slot name="icon"></slot></span>
		<span class="fab__expanded"><slot></slot></span>
	</button>
</template>

<style scoped lang="scss">
.fab {
	display: flex;
	height: 5.6rem;
	padding: 1.4rem;
	align-items: center;
	border-radius: 1.6rem;
	border: none;

	.fab__icon {
		display: block;
		width: 2.4rem;
		height: 2.4rem;
	}
}
</style>
