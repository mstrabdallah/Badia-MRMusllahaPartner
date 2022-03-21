import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/authModules";
import category from "./modules/categoryModules";
import city from './modules/cityModules'
import orders from './modules/ordersModules'
// Load Vuex
Vue.use(Vuex);

// Create store
export default () => new Vuex.Store({
  modules: {
    auth,
    category,
    city,
    orders
  }
});