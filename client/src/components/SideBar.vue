<template>
	<aside
		class="app-sidebar bg-body shadow"
		:data-bs-theme="currentTheme">
		<!--begin::Sidebar Brand-->
		<div class="sidebar-brand">
			<!--begin::Brand Link-->
			<a href="./index.html" class="brand-link">
				<!--begin::Brand Image-->
				<!--end::Brand Image-->
				<!--begin::Brand Text-->
				<span class="brand-text fw-light">LHIKE ERP</span>
				<!--end::Brand Text-->
			</a>
			<!--end::Brand Link-->
		</div>
		<!--end::Sidebar Brand-->
		<!--begin::Sidebar Wrapper-->
		<div class="sidebar-wrapper">
			<nav class="mt-2">
				<!--begin::Sidebar Menu-->
				<ul
					class="nav sidebar-menu flex-column"
					data-lte-toggle="treeview"
					role="menu"
					data-accordion="false">
					<li class="nav-header">DASHBOARD</li>
					<li class="nav-item">
						<a href="./docs/introduction.html" class="nav-link active">
							<i class="nav-icon bi bi-download"></i>
							<p>Sales Warehouse Logistics</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="./docs/layout.html" class="nav-link">
							<i class="nav-icon bi bi-grip-horizontal"></i>
							<p>Layout</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="./docs/color-mode.html" class="nav-link">
							<i class="nav-icon bi bi-star-half"></i>
							<p>Color Mode</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-ui-checks-grid"></i>
							<p>
								Components
								<i class="nav-arrow bi bi-chevron-right"></i>
							</p>
						</a>
						<ul class="nav nav-treeview">
							<li class="nav-item">
								<a href="./docs/components/main-header.html" class="nav-link">
									<i class="nav-icon bi bi-circle"></i>
									<p>Main Header</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="./docs/components/main-sidebar.html" class="nav-link">
									<i class="nav-icon bi bi-circle"></i>
									<p>Main Sidebar</p>
								</a>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-filetype-js"></i>
							<p>
								Javascript
								<i class="nav-arrow bi bi-chevron-right"></i>
							</p>
						</a>
						<ul class="nav nav-treeview">
							<li class="nav-item">
								<a href="./docs/javascript/treeview.html" class="nav-link">
									<i class="nav-icon bi bi-circle"></i>
									<p>Treeview</p>
								</a>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<a href="./docs/browser-support.html" class="nav-link">
							<i class="nav-icon bi bi-browser-edge"></i>
							<p>Browser Support</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="./docs/how-to-contribute.html" class="nav-link">
							<i class="nav-icon bi bi-hand-thumbs-up-fill"></i>
							<p>How To Contribute</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="./docs/faq.html" class="nav-link">
							<i class="nav-icon bi bi-question-circle-fill"></i>
							<p>FAQ</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="./docs/license.html" class="nav-link">
							<i class="nav-icon bi bi-patch-check-fill"></i>
							<p>License</p>
						</a>
					</li>
					<li class="nav-header">MULTI LEVEL EXAMPLE</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-circle-fill"></i>
							<p>Level 1</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-circle-fill"></i>
							<p>
								Level 1
								<i class="nav-arrow bi bi-chevron-right"></i>
							</p>
						</a>
						<ul class="nav nav-treeview">
							<li class="nav-item">
								<a href="#" class="nav-link">
									<i class="nav-icon bi bi-circle"></i>
									<p>Level 2</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<i class="nav-icon bi bi-circle"></i>
									<p>
										Level 2
										<i class="nav-arrow bi bi-chevron-right"></i>
									</p>
								</a>
								<ul class="nav nav-treeview">
									<li class="nav-item">
										<a href="#" class="nav-link">
											<i class="nav-icon bi bi-record-circle-fill"></i>
											<p>Level 3</p>
										</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link">
											<i class="nav-icon bi bi-record-circle-fill"></i>
											<p>Level 3</p>
										</a>
									</li>
									<li class="nav-item">
										<a href="#" class="nav-link">
											<i class="nav-icon bi bi-record-circle-fill"></i>
											<p>Level 3</p>
										</a>
									</li>
								</ul>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<i class="nav-icon bi bi-circle"></i>
									<p>Level 2</p>
								</a>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-circle-fill"></i>
							<p>Level 1</p>
						</a>
					</li>
					<li class="nav-header">LABELS</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-circle text-danger"></i>
							<p class="text">Important</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-circle text-warning"></i>
							<p>Warning</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link">
							<i class="nav-icon bi bi-circle text-info"></i>
							<p>Informational</p>
						</a>
					</li>
				</ul>
				<!--end::Sidebar Menu-->
			</nav>
		</div>
		<!--end::Sidebar Wrapper-->
	</aside>
	<!--end::Sidebar-->
	<!--begin::App Main-->
</template>

<script>
import { ref, watch } from "vue";
import { useThemeStore } from "../store/theme";

export default {
	setup() {
		const themeStore = useThemeStore();
		const currentTheme = ref(themeStore.currentTheme);

		// Watch for changes in the theme store
		watch(
			() => themeStore.currentTheme,
			(newTheme) => {
				currentTheme.value = newTheme; // Update local reference
			}
		);

		return {
			currentTheme,
		};
	},
};
</script>
