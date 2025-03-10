import Vue from "vue";
import Vuex from "vuex";
import reports from "./reports";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reports,
  },
});
