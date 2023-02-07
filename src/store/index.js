import Vue from "vue";
import Vuex from "vuex";

import prospectiveVendor from "./modules/prospectiveVendor";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    prospectiveVendor
  }
});
