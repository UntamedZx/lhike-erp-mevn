import { defineStore } from "pinia";

export const useAssetStore = defineStore("assetStore", {
	state: () => ({
		styleElements: [],
		scriptElements: [],
	}),
	actions: {
		injectAssets(cssFiles = [], scriptFiles = []) {
			this.styleElements = cssFiles.map((href) => {
				const link = document.createElement("link");
				link.rel = "stylesheet";
				link.href = href;
				document.head.appendChild(link);
				return link;
			});
			this.scriptElements = scriptFiles.map((src) => {
				const script = document.createElement("script");
				script.src = src;
				document.body.appendChild(script);
				return script;
			});
		},
		cleanUpAssets() {
			this.styleElements.forEach((el) => {
				if (el.parentNode) el.parentNode.removeChild(el);
			});
			this.scriptElements.forEach((el) => {
				if (el.parentNode) el.parentNode.removeChild(el);
			});
		},
	},
});
