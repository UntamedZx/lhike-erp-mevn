<template>
	<div class="layout-fixed sidebar-expand-lg bg-body-tertiary poppins-regular">
		<div class="app-wrapper">
			<NavBar />
			<SideBar />
			<main class="app-main">
				<router-view />
			</main>
		</div>
	</div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";
import { onMounted } from "vue";
import { useHead } from "@vueuse/head";

export default {
	components: {
		NavBar,
		SideBar,
	},

	setup() {
		useHead({
			link: [
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css",
				},
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/styles/overlayscrollbars.min.css",
				},
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css",
				},
				{ rel: "stylesheet", href: "/src/assets/admin-lte/css/adminlte.css" },
				{
					rel: "stylesheet",
					href: "https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
				},
			],
			script: [
				{
					src: "https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js",
					defer: true,
				},
				{
					src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
					defer: true,
				},
				{
					src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
					defer: true,
				},
				{ src: "/src/assets/admin-lte/js/adminlte.js", defer: true },
			],
		});

		return {};
	},
};
</script>
