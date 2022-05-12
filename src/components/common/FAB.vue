<script setup lang="ts">
import { defineProps } from "vue";

function map<Type extends string | number | symbol>(
	value: Type | null | undefined,
	mapping: Record<Type, Type>
): Type {
	return value ? mapping[value] : mapping["_" as Type];
}

const props = defineProps<{
	kind?: "primary" | "secondary" | "tertiary" | "surface";
	size?: "small" | "large";
}>();

const test = (strings: TemplateStringsArray, ...expressions: any) => {
	console.log(expressions);
	return;
};

console.log(props);
</script>

<template>
	<button
		class="fab"
		:class="[
			kind ?? 'primary',
			map(size, {
				small: 'shape-small fab--small',
				_: 'shape-large',
				large: 'shape-extra-large fab--large',
			}),
		]"
	>
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

	&:hover {
		cursor: pointer;
	}

	.fab__icon {
		display: block;
		width: 2.4rem;
		height: 2.4rem;
	}
}
</style>
