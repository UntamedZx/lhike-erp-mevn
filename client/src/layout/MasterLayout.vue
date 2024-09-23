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
import { onMounted, onBeforeUnmount } from "vue";
import { useAssetStore } from "../store/useAssetStore";

export default {
	components: {
		NavBar,
		SideBar,
	},

	setup() {
		const assetStore = useAssetStore();

		const cssFiles = [
			"https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css",
			"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/styles/overlayscrollbars.min.css",
			"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css",
			"/src/assets/admin-lte/css/adminlte.css",
			"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
		];
		const scriptFiles = [
			"https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js",
			"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
			"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
			"/src/assets/admin-lte/js/adminlte.js",
		];

		onMounted(() => {
			assetStore.injectAssets(cssFiles, scriptFiles);
		});

		onBeforeUnmount(() => {
			assetStore.cleanUpAssets();
		});

		return {};
	},
};
</script>
