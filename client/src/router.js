import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import MasterLayout from "./layout/MasterLayout.vue";
import Home from "./views/UserDashboard.vue";
import { useAuthStore } from "./store/auth";
import { computed } from "vue";

const routes = [
	{ path: "/", redirect: "/login" },
	{
		path: "/login",
		component: Login,
		meta: {
			requiresGuest: true,
		},
	},
	{
		path: "/register",
		component: Register,
		meta: {
			requiresGuest: true,
		},
	},
	{
		path: "/home",
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
	{ path: "/:pathMatch(.*)*", redirect: "/login" },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();
	const token = authStore.token;
	const userRole = authStore.user?.role;

	if (to.meta.requiresAuth && !token) {
		return next("/login");
	}

	if (to.meta.requiresAuth && to.meta.role && userRole !== to.meta.role) {
		return next("/login");
	}

	if (to.meta.requiresGuest && token) {
		return next("/home");
	}

	if (to.meta.role === "admin" && userRole !== "admin") {
		return next("/login");
	}

	next();
});

export default router;
