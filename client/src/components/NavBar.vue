<template>
	<nav class="app-header navbar navbar-expand bg-body">
		<!--begin::Container-->
		<div class="container-fluid">
			<!--begin::Start Navbar Links-->
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" data-lte-toggle="sidebar" href="#" role="button">
						<i class="bi bi-list"></i>
					</a>
				</li>
				<li class="nav-item d-none d-md-block">
					<a href="#" class="nav-link">Home</a>
				</li>
				<li class="nav-item d-none d-md-block">
					<a href="#" class="nav-link">Contact</a>
				</li>
			</ul>
			<!--end::Start Navbar Links-->
			<!--begin::End Navbar Links-->
			<ul class="navbar-nav ms-auto">
				<!--begin::Navbar Search-->
				<li class="nav-item">
					<a
						class="nav-link"
						data-widget="navbar-search"
						href="#"
						role="button">
						<i class="bi bi-search"></i>
					</a>
				</li>
				<!--end::Navbar Search-->
				<!--begin::Messages Dropdown Menu-->
				<li class="nav-item dropdown">
					<a class="nav-link" data-bs-toggle="dropdown" href="#">
						<i class="bi bi-chat-text"></i>
						<span class="navbar-badge badge text-bg-danger">3</span>
					</a>
					<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
						<a href="#" class="dropdown-item">
							<!--begin::Message-->
							<div class="d-flex">
								<div class="flex-shrink-0">
									<img
										src="../assets/admin-lte/img/user1-128x128.jpg"
										alt="User Avatar"
										class="img-size-50 rounded-circle me-3" />
								</div>
								<div class="flex-grow-1">
									<h3 class="dropdown-item-title">
										Brad Diesel
										<span class="float-end fs-7 text-danger"
											><i class="bi bi-star-fill"></i
										></span>
									</h3>
									<p class="fs-7">Call me whenever you can...</p>
									<p class="fs-7 text-secondary">
										<i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
									</p>
								</div>
							</div>
							<!--end::Message-->
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<!--begin::Message-->
							<div class="d-flex">
								<div class="flex-shrink-0">
									<img
										src="../assets/admin-lte/img/user8-128x128.jpg"
										alt="User Avatar"
										class="img-size-50 rounded-circle me-3" />
								</div>
								<div class="flex-grow-1">
									<h3 class="dropdown-item-title">
										John Pierce
										<span class="float-end fs-7 text-secondary">
											<i class="bi bi-star-fill"></i>
										</span>
									</h3>
									<p class="fs-7">I got your message bro</p>
									<p class="fs-7 text-secondary">
										<i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
									</p>
								</div>
							</div>
							<!--end::Message-->
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<!--begin::Message-->
							<div class="d-flex">
								<div class="flex-shrink-0">
									<img
										src="../assets/admin-lte/img/user3-128x128.jpg"
										alt="User Avatar"
										class="img-size-50 rounded-circle me-3" />
								</div>
								<div class="flex-grow-1">
									<h3 class="dropdown-item-title">
										Nora Silvester
										<span class="float-end fs-7 text-warning">
											<i class="bi bi-star-fill"></i>
										</span>
									</h3>
									<p class="fs-7">The subject goes here</p>
									<p class="fs-7 text-secondary">
										<i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
									</p>
								</div>
							</div>
							<!--end::Message-->
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item dropdown-footer"
							>See All Messages</a
						>
					</div>
				</li>
				<!--end::Messages Dropdown Menu-->
				<!--begin::Notifications Dropdown Menu-->
				<li class="nav-item dropdown">
					<a class="nav-link" data-bs-toggle="dropdown" href="#">
						<i class="bi bi-bell-fill"></i>
						<span class="navbar-badge badge text-bg-warning">15</span>
					</a>
					<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
						<span class="dropdown-item dropdown-header">15 Notifications</span>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="bi bi-envelope me-2"></i> 4 new messages
							<span class="float-end text-secondary fs-7">3 mins</span>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="bi bi-people-fill me-2"></i> 8 friend requests
							<span class="float-end text-secondary fs-7">12 hours</span>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="bi bi-file-earmark-fill me-2"></i> 3 new reports
							<span class="float-end text-secondary fs-7">2 days</span>
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item dropdown-footer">
							See All Notifications
						</a>
					</div>
				</li>
				<!--end::Notifications Dropdown Menu-->
				<!--begin::Fullscreen Toggle-->
				<li class="nav-item">
					<a class="nav-link" href="#" data-lte-toggle="fullscreen">
						<i data-lte-icon="maximize" class="bi bi-arrows-fullscreen"></i>
						<i
							data-lte-icon="minimize"
							class="bi bi-fullscreen-exit"
							style="display: none"></i>
					</a>
				</li>
				<!--end::Fullscreen Toggle-->
				<!--begin::User Menu Dropdown-->
				<li class="nav-item dropdown">
					<button
						class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
						id="bd-theme"
						type="button"
						aria-expanded="false"
						data-bs-toggle="dropdown"
						data-bs-display="static">
						<span class="theme-icon-active">
							<i :class="themeIcons[currentTheme]"></i>
						</span>
						<span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
					</button>
					<ul
						class="dropdown-menu dropdown-menu-end"
						aria-labelledby="bd-theme-text"
						style="--bs-dropdown-min-width: 8rem">
						<li>
							<button
								type="button"
								class="dropdown-item d-flex align-items-center"
								data-bs-theme-value="light"
								:aria-pressed="currentTheme === 'light'"
								@click="toggleTheme('light')">
								<i class="bi bi-sun-fill me-2"></i>
								Light
								<i
									class="bi bi-check-lg ms-auto"
									v-if="currentTheme === 'light'"></i>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="dropdown-item d-flex align-items-center"
								data-bs-theme-value="dark"
								:aria-pressed="currentTheme === 'dark'"
								@click="toggleTheme('dark')">
								<i class="bi bi-moon-fill me-2"></i>
								Dark
								<i
									class="bi bi-check-lg ms-auto"
									v-if="currentTheme === 'dark'"></i>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="dropdown-item d-flex align-items-center"
								data-bs-theme-value="auto"
								:aria-pressed="currentTheme === 'auto'"
								@click="toggleTheme('auto')">
								<i class="bi bi-circle-fill-half-stroke me-2"></i>
								Auto
								<i
									class="bi bi-check-lg ms-auto"
									v-if="currentTheme === 'auto'"></i>
							</button>
						</li>
					</ul>
				</li>
				<li class="nav-item dropdown user-menu">
					<button class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
						<img
							src="../assets/admin-lte/img/user2-160x160.jpg"
							class="user-image rounded-circle shadow"
							alt="User Image" />
						<span class="d-none d-md-inline">{{ userName }}</span>
					</button>
					<ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
						<!--begin::User Image-->
						<li class="user-header text-bg-primary">
							<img
								src="../assets/admin-lte/img/user2-160x160.jpg"
								class="rounded-circle shadow"
								alt="User Image" />
							<p>
								{{ userName }}
								<small>Member since Nov. 2023</small>
							</p>
						</li>
						<!--end::User Image-->
						<!--begin::Menu Body-->
						<li class="user-body">
							<!--begin::Row-->
							<div class="row">
								<div class="col-4 text-center"><a href="#">Followers</a></div>
								<div class="col-4 text-center"><a href="#">Sales</a></div>
								<div class="col-4 text-center"><a href="#">Friends</a></div>
							</div>
							<!--end::Row-->
						</li>
						<!--end::Menu Body-->
						<!--begin::Menu Footer-->
						<li class="user-footer">
							<a href="#" class="btn btn-default btn-flat">Profile</a>
							<button
								@click="logout"
								class="btn btn-default btn-flat float-end">
								Sign out
							</button>
						</li>
						<!--end::Menu Footer-->
					</ul>
				</li>
				<!--end::User Menu Dropdown-->
			</ul>
			<!--end::End Navbar Links-->
		</div>
		<!--end::Container-->
	</nav>
	<!--end::Header-->
	<!--begin::Sidebar-->
</template>

<script>
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import { useThemeStore } from "../store/theme";

export default {
	setup() {
		const authStore = useAuthStore();
		const router = useRouter();
		const userName = computed(() =>
			authStore.user ? authStore.user.name : ""
		);
		const themeStore = useThemeStore();
		const currentTheme = ref(themeStore.currentTheme); // Create a local reactive reference

		const toggleTheme = (theme) => {
			themeStore.setTheme(theme);
			currentTheme.value = theme; // Update local reference
		};

		// Watch for changes in the theme store to keep local state in sync
		watch(
			() => themeStore.currentTheme,
			(newTheme) => {
				currentTheme.value = newTheme;
			}
		);

		const themeIcons = {
			light: "bi bi-sun-fill",
			dark: "bi bi-moon-fill",
			auto: "bi bi-circle-fill-half-stroke",
		};

		const logout = () => {
			authStore.logout();
			router.push("/login");
		};

		return {
			logout,
			userName,
			currentTheme,
			toggleTheme,
			themeIcons,
		};
	},
};
</script>
