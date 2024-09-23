<template>
	<div id="app" class="min-h-screen bg-gray-100">
		<component :is="layout">
			<router-view />
		</component>
	</div>
</template>

<script>
import MasterLayout from "./layout/MasterLayout.vue";

export default {
	name: "App",
	computed: {
		layout() {
			const route = this.$route;
			if (route.path === "/login" || route.path === "/register") {
				return "div";
			}
			return MasterLayout;
		},
	},
};
</script>

<style>
html,
body,
#app {
	height: 100%;
	margin: 0;
	padding: 0;
}
</style>
