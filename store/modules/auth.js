import axios from "axios";


const state = {
  checkAuth: false,
  step: 1,
  token: '',
  user: [],
  register: [],
  loading: false,
  checkUserStatus: false
};

const getters = {

};

const actions = {

  Logout() {
    this.$cookies.remove('token');
    this.$cookies.remove('user');
    if (this.$i18n.locale === "ar") {
      window.location.href = "/";
    } else {
      window.location.href = "/en";
    }
  },


  getAuth({ commit, state, dispatch }) {

    if (!state.checkAuth) return false;
    const response = this.$axios.$get('auth').then((res) => {
      //this.LogOut()
      commit("user", response.data);
    }).catch(function (error) {
      if (error.response.status === 401) {
        dispatch('Logout');
      }
    });
  },

  registerStep1({ state, dispatch }, arrayData) {

    var data = new FormData();

    if (state.step === 2)
      data.append("verification_code", arrayData);
    else
      state.register = arrayData;

    data.append("name", state.register.name);
    data.append("phone", state.register.phone);
    data.append("email", state.register.email);
    data.append("referral", state.register.referral);
    data.append("password", state.register.password);

    state.step = 2;
    state.loading = true;
    this.$axios.post("register", data).then((res) => {
      state.loading = false;
      state.step = 2;
    }).catch((error) => {
        state.loading = false;
      });
  },


}

const mutations = {

  registerFPush(state, data) {
    state.register = state.register.push(data);
    console.log(state.data)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
};
