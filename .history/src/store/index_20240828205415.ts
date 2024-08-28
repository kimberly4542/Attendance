import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

export interface State {
  userRole: "admin" | "teacher" | "";
  isAuthenticated: false;
}

export default createStore<State>({
  state: {
    userRole: "",
  },
  mutations: {
    setUserRole(state: State, role: "admin" | "teacher") {
      state.userRole = role;
    },
    clearUserRole(state: State) {
      state.userRole = "";
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
  },
});
