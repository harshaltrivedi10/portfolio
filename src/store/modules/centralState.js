const state = {
  mode: "light"
};
const mutations = {
  toggle(state) {
    if (state.mode === "light") {
      state.mode = "dark";
    } else {
      state.mode = "light";
    }
  }
};
const actions = {
  toggle({ commit }) {
    commit("toggle");
  }
};
const getters = {
  getMode(state) {
    return state.mode;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
