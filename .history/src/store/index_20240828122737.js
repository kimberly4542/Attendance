import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

// export default createStore({
//   state: {
//     userRole: '' as 'admin' | 'teacher' | ''
//   },
//   mutations: {
//     setUserRole(state, role: 'admin' | 'teacher') {
//       state.userRole = role
//     },
//     clearUserRole(state) {
//       state.userRole = ''
//     }
//   },
//   actions: {
//     login({ commit }, role: 'admin' | 'teacher') {
//       commit('setUserRole', role)
//     },
//     logout({ commit }) {
//       commit('clearUserRole')
//     }
//   },
//   getters: {
//     userRole: (state) => state.userRole
//   }
// })

export interface State {
  userRole: "admin" | "teacher" | "";
}

export default createStore <
  State >
  {
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
  };
