<script setup lang="ts">
import TextField from "@/components/common/TextField.vue";
import SideSheet from "@/components/common/SideSheet.vue";
import FloatingActionButton from "@/components/common/FloatingActionButton.vue";

import BaseMap from "@/components/custom/BaseMap.vue";
</script>

<template>
	<header>Seats App</header>
	<main>
		<BaseMap id="map">
			<FloatingActionButton>
				<template v-slot:icon>✒️</template>
				Test
			</FloatingActionButton>
		</BaseMap>
		<SideSheet>
			<TextField />
		</SideSheet>
	</main>
</template>

<style>
body {
	display: flex;
	flex-direction: column;
}

header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4rem;
}

main {
	display: flex;
	flex-grow: 1;
}

#map {
	flex-grow: 1;
}
</style>
