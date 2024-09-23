<template>
	<div class="login-page bg-body-secondary poppins-regular">
		<div class="login-box">
			<div class="login-logo">
				<a href="../index2.html"><b>LHIKE</b>ERP</a>
			</div>
			<!-- /.login-logo -->
			<div class="card">
				<div class="card-body login-card-body">
					<p class="login-box-msg">Sign in to start your session</p>
					<div
						class="alert alert-danger"
						role="alert"
						v-if="errorMessage"
						style="font-size: 13px; padding: 12px">
						{{ errorMessage }}
					</div>
					<form @submit.prevent="handleLogin">
						<div class="input-group mb-3">
							<input
								type="email"
								v-model="email"
								class="form-control"
								placeholder="Email" />
							<div class="input-group-text">
								<span class="bi bi-envelope"></span>
							</div>
						</div>
						<a
							href=""
							@click.prevent="togglePasswordVisibility"
							style="font-size: 13px; text-decoration: none; float: right"
							>{{ showPasswordText }}</a
						>
						<div class="input-group mb-3">
							<input
								:type="passwordFieldType"
								v-model="password"
								class="form-control"
								placeholder="Password" />
							<div class="input-group-text">
								<span class="bi bi-lock-fill"></span>
							</div>
						</div>
						<!--begin::Row-->
						<div class="row">
							<div class="col-8">
								<div class="form-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckDefault" />
									<label class="form-check-label" for="flexCheckDefault">
										Remember Me
									</label>
								</div>
							</div>
							<!-- /.col -->
							<div class="col-4">
								<div class="d-grid gap-2">
									<button type="submit" class="btn btn-primary">Sign In</button>
								</div>
							</div>
							<!-- /.col -->
						</div>
						<!--end::Row-->
					</form>
					<p class="mb-1">
						<a href="forgot-password.html" style="font-size: 13px"
							>I forgot my password</a
						>
					</p>
					<p class="mb-0">
						<a href="register.html" class="text-center" style="font-size: 13px">
							Register
						</a>
					</p>
				</div>
				<!-- /.login-card-body -->
			</div>
		</div>
		<!-- /.login-box -->
		<!--begin::Third Party Plugin(OverlayScrollbars)-->
	</div>
	<!--end::Body-->
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useAuthStore } from "../store/auth.js";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

export default {
	name: "Login",
	setup() {
		useHead({
			title: "Login",
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
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
				},
				{ rel: "stylesheet", href: "/src/assets/admin-lte/css/adminlte.css" },
			],
			script: [
				{
					src: "https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js",
					async: true,
				},
				{
					src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
					async: true,
				},
				{
					src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
					async: true,
				},
				{ src: "/src/assets/admin-lte/js/adminlte.js", async: true },
			],
		});

		const email = ref("");
		const password = ref("");
		const authStore = useAuthStore();
		const router = useRouter();
		const errorMessage = ref("");
		const isPasswordVisible = ref(false);
		const passwordFieldType = computed(() =>
			isPasswordVisible.value ? "text" : "password"
		);
		const showPasswordText = computed(() =>
			isPasswordVisible.value ? "Hide Password" : "Show Password"
		);
		const togglePasswordVisibility = () => {
			isPasswordVisible.value = !isPasswordVisible.value;
		};

		const handleLogin = async () => {
			try {
				await authStore.login({
					email: email.value,
					password: password.value,
				});
				const role = authStore.user?.role;
				if (role === "admin") {
					router.push("/home");
				} else {
					router.push("/home");
				}
			} catch (error) {
				console.error(error);
				errorMessage.value = error.response.data.message;
			}
		};

		return {
			email,
			password,
			handleLogin,
			errorMessage,
			isPasswordVisible,
			passwordFieldType,
			showPasswordText,
			togglePasswordVisibility,
		};
	},
};
</script>
