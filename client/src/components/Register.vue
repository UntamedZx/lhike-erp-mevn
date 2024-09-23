<template>
	<div class="register-page bg-body-secondary">
		<div class="register-box">
			<div class="register-logo">
				<a href="../index2.html"><b>LHIKE</b>ERP</a>
			</div>
			<!-- /.register-logo -->
			<div class="card">
				<div class="card-body register-card-body">
					<p class="register-box-msg">Register a new membership</p>
					<div class="alert alert-danger" role="alert" v-if="errorMessage">
						{{ errorMessage }}
					</div>
					<form @submit.prevent="handleRegister">
						<div class="input-group mb-3">
							<input
								type="text"
								v-model="name"
								class="form-control"
								placeholder="Full Name" />
							<div class="input-group-text">
								<span class="bi bi-person"></span>
							</div>
						</div>
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
									<label
										class="form-check-label"
										for="flexCheckDefault"
										style="font-size: 13px">
										I agree to the <a href="#">terms</a>
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
					<p class="mb-0 mt-3">
						<a href="login.html" class="text-center" style="font-size: 13px">
							I already have a membership
						</a>
					</p>
				</div>
				<!-- /.register-card-body -->
			</div>
		</div>
	</div>
	<!--end::Body-->
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

export default {
	name: "Register",
	setup() {
		useHead({
			title: "Register",
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
					href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
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
		const name = ref("");
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

		const handleRegister = async () => {
			try {
				await authStore.register({
					name: name.value,
					email: email.value,
					password: password.value,
					role: "user",
				});
				const role = authStore.user.role;
				if (role === "admin") {
					router.push("/admin");
				} else {
					router.push("/user");
				}
			} catch (error) {
				console.error(error);
				errorMessage.value = error.response.data.message;
			}
		};

		return {
			name,
			email,
			password,
			handleRegister,
			errorMessage,
			isPasswordVisible,
			passwordFieldType,
			showPasswordText,
			togglePasswordVisibility,
		};
	},
};
</script>
