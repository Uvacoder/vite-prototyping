<template>
	<div>
		<h1>{{ msg }}</h1>

		<p>See <code>README.md</code> for more information.</p>

		<p>
			<a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
			<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
		</p>

		<button class="button" @click="increment">count is: {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test hot module replacement.
		</p>
	</div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
	msg: {
		type: String,
		required: true,
	},
});

const count = ref(0);

const increment = () => count.value++;
</script>

<style scoped lang="postcss">
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}

.button {
	@apply py-2 px-8 m-8 rounded-md;
	@apply bg-green-500 hover:bg-green-600 text-white;
	@apply transition ease-in-out duration-300;
	@apply focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50;
}
</style>
