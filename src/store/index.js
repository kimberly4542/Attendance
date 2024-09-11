// import {
//   createStore,
//   Store as VuexStore,
//   CommitOptions,
//   DispatchOptions,
// } from "vuex";
// export interface State {
//   userRole: "admin" | "teacher" | "";
//   isAuthenticated: false;
// }
// export default createStore<State>({
//   state: {
//     userRole: "",
//   },
//   mutations: {
//     setUserRole(state: State, role: "admin" | "teacher") {
//       state.userRole = role;
//       state.isAuthenticated = true;
//     },
//     clearUserRole(state: State) {
//       state.userRole = "";
//       state.isAuthenticated = false;
//     },
//   },
//   actions: {
//     login({ commit }, role: "admin" | "teacher") {
//       commit("setUserRole", role);
//     },
//     logout({ commit }) {
//       commit("clearUserRole");
//     },
//   },
//   getters: {
//     userRole: (state: State) => state.userRole,
//     isAuthenticated: (state: State) => state.isAuthenticated,
//   },
// });
import { createStore } from "vuex";
export default createStore({
    state: {
        userRole: "", // Initial userRole is an empty string
        username: "",
        isAuthenticated: false, // Initial isAuthenticated is false
    },
    // mutations: {
    //   setUserRole(state: State, role: "admin" | "teacher") {
    //     state.userRole = role;
    //     state.isAuthenticated = true; // Set isAuthenticated to true when a role is set
    //   },
    //   clearUserRole(state: State) {
    //     state.userRole = "";
    //     state.isAuthenticated = false; // Set isAuthenticated to false when the role is cleared
    //   },
    // },
    mutations: {
        setUser(state, { role, username }) {
            state.userRole = role;
            state.username = username; // Set the username
            state.isAuthenticated = true;
        },
        clearUser(state) {
            state.userRole = "";
            state.username = ""; // Clear the username
            state.isAuthenticated = false;
        },
    },
    // actions: {
    //   login({ commit }, role: "admin" | "teacher") {
    //     commit("setUserRole", role);
    //   },
    //   logout({ commit }) {
    //     commit("clearUserRole");
    //   },
    // },
    actions: {
        login({ commit }, { role, username }) {
            commit("setUser", { role, username });
        },
        logout({ commit }) {
            commit("clearUser");
        },
    },
    // getters: {
    //   userRole: (state: State) => state.userRole,
    //   isAuthenticated: (state: State) => state.isAuthenticated,
    // },
    getters: {
        userRole: (state) => state.userRole,
        username: (state) => state.username, // Add a getter for username
        isAuthenticated: (state) => state.isAuthenticated,
    },
});
