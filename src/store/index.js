import Vue from "vue";
import Vuex from "vuex";
import CentralState from "./modules/centralState";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CentralState
  }
});
