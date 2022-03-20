import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import category from "./modules/category";
import tickets from "./modules/tickets";

// Load Vuex
Vue.use(Vuex);

// Create store
export default () => new Vuex.Store({
  modules: {
    auth,
    category,
    tickets,
  }
});