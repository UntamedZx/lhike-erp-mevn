// import { createStore } from "vuex";
import { defineStore } from "pinia";
import axios from "axios";

// const store = createStore({
// 	state: {
// 		token: localStorage.getItem("token") || null,
// 		user: JSON.parse(localStorage.getItem("user")) || null,
// 	},
// 	mutations: {
// 		SET_TOKEN(state, token) {
// 			state.token = token;
// 			localStorage.setItem("token", token);
// 		},
// 		SET_USER(state, user) {
// 			state.user = user;
// 			localStorage.setItem("user", JSON.stringify(user));
// 		},
// 		LOGOUT(state) {
// 			state.token = null;
// 			state.user = null;
// 			localStorage.removeItem("token");
// 			localStorage.removeItem("user");
// 		},
// 	},
// 	actions: {
// 		async login({ commit }, credentials) {
// 			const { data } = await axios.post(
// 				"http://localhost:5000/api/auth/login",
// 				credentials
// 			);
// 			commit("SET_TOKEN", data.token);
// 			commit("SET_USER", data.user);
// 		},
// 		async register({ commit }, credentials) {
// 			const { data } = await axios.post(
// 				"http://localhost:5000/api/auth/register",
// 				credentials
// 			);
// 			commit("SET_TOKEN", data.token);
// 			commit("SET_USER", data.user);
// 		},
// 		logout({ commit }) {
// 			commit("LOGOUT");
// 		},
// 	},
// });

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: localStorage.getItem("token") || null,
		user: JSON.parse(localStorage.getItem("user")) || null,
	}),
	actions: {
		setToken(token) {
			this.token = token;
			localStorage.setItem("token", token);
		},
		setUser(user) {
			this.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logout() {
			this.token = null;
			this.user = null;
			localStorage.removeItem("token");
			localStorage.removeItem("user");
		},
		async login(credentials) {
			const { data } = await axios.post(
				"http://localhost:5000/api/auth/login",
				credentials
			);
			this.setToken(data.token);
			this.setUser(data.user);
		},
		async register(credentials) {
			const { data } = await axios.post(
				"http://localhost:5000/api/auth/register",
				credentials
			);
			this.setToken(data.token);
			this.setUser(data.user);
		},
	},
});

export default useAuthStore;
