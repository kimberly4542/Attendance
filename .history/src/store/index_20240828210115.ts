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

// Define the State interface
export interface State {
  userRole: "admin" | "teacher" | ""; // userRole can be "admin", "teacher", or an empty string
  isAuthenticated: boolean; // isAuthenticated is a boolean that indicates if the user is logged in
}

export default createStore<State>({
  state: {
    userRole: "" as "admin" | "teacher" | "", // Initial userRole is an empty string
    isAuthenticated: false, // Initial isAuthenticated is false
  },
  mutations: {
    setUserRole(state: State, role: "admin" | "teacher") {
      state.userRole = role;
      state.isAuthenticated = true; // Set isAuthenticated to true when a role is set
    },
    clearUserRole(state: State) {
      state.userRole = "";
      state.isAuthenticated = false; // Set isAuthenticated to false when the role is cleared
    },
  },
  actions: {
    login({ commit }, role: "admin" | "teacher") {
      commit("setUserRole", role);
    },
    logout({ commit }) {
      commit("clearUserRole");
    },
  },
  getters: {
    userRole: (state: State) => state.userRole,
    isAuthenticated: (state: State) => state.isAuthenticated,
  },
});
