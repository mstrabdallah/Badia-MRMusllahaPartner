//export const namespaces = true

const state = {
  checkAuth: false,
  step: 1,
  stepSub: 1,
  token: null,
  device: 'website',
  sessionId: '1234567',
  user: [],
  register: [],
  loading: false,
  checkUserStatus: false,
  loadingReg: true,
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


  getToken({ commit, app, state, dispatch }) {
    if (state.checkAuth === true) return false;
    const response = this.$axios.$get('/check_token').then((res) => {

      state.token = res.token;
      this.$cookies.set("token", res.token, {
        path: "/",
        maxAge: 365 * 24 * 60 * 60,
      });
    }).catch(function (error) {
      // if (error.response.status === 401) {


      // }
    });
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

  getMe({ state }) {

    state.loadingReg = true;
    const response = this.$axios.$get('/me').then((res) => {
      state.loadingReg = false;
      if (res.data === 401) {
        state.step = 1;

      } else {
        state.step = res.data.current_step + 1;
        commit("user", res.data);
      }
    }).catch(function (error) {

    });
  },
  registerStep1({ state, dispatch }, arrayData) {

    //dispatch('getCategory');

    var data = new FormData();

    if (state.stepSub === 2)
      data.append("verification_code", arrayData);
    else
      state.register = arrayData;

    data.append("name", state.register.name);
    data.append("phone", state.register.phone);
    data.append("email", state.register.email);
    data.append("referral", state.register.referral);
    data.append("password", state.register.password);
    data.append("password_confirmation", state.register.password);

    state.loading = true;
    this.$axios.post("/Register/step1", data).then((res) => {
      state.loading = false;
      if (res.status === 200) {
        if (state.stepSub === 1)
          state.stepSub = 2;
        else
          state.step = 2;
      }
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep2({ state, dispatch }, arrayData) {
    console.log('arrayData ...',arrayData)
    var data = new FormData();
    state.register = arrayData;

    data.append("id_number", state.register.id_number);
    data.append("type", state.register.type);
    data.append("id_file", state.register.id_file);


    state.loading = true;
    this.$axios.post("/Register/step2", data).then((res) => {
      state.loading = false;
      if (res.status === 200) {

        state.step = 3;
      }

    }).catch((error) => {
      console.error(error.response)
      state.loading = false;
    });
  },

  registerStep3({ state, dispatch }, arrayData) {
  
    var data = new FormData();
    state.register = arrayData;

    data.append("category_id", state.register.category_id);
    for(var i = 0 ; i< state.register.sub_category_id.length; i++){
      data.append("sub_category_id[]", state.register.sub_category_id[i]);
    }
    state.loading = true;
    this.$axios.post("/Register/step3", data).then((res) => {
      state.loading = false;
      state.step = 4;
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep4({ state, dispatch }, arrayData) {
    state.step = 5;
    var data = new FormData();
    state.register = arrayData;

    data.append("id_number", state.register.id_number);
    data.append("type", state.register.type);
    data.append("id_file", state.register.id_file);


    state.loading = true;
    this.$axios.post("/Register/step2", data).then((res) => {
      state.loading = false;
      //  state.step = 2;
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep5({ state, dispatch }, arrayData) {
    state.step = 6;
    var data = new FormData();
    state.register = arrayData;

    data.append("id_number", state.register.id_number);
    data.append("type", state.register.type);
    data.append("id_file", state.register.id_file);


    state.loading = true;
    this.$axios.post("/Register/step2", data).then((res) => {
      state.loading = false;
      //  state.step = 2;
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep6({ state, dispatch }, arrayData) {
    state.step = 7;
    var data = new FormData();
    state.register = arrayData;

    data.append("images[]", state.register.license_file);

    state.loading = true;
    this.$axios.post("/Register/step6", data).then((res) => {
      state.loading = false;
      //  state.step = 2;
    }).catch((error) => {
      state.loading = false;
    });
  },


  registerStep7({ state }, arrayData) {
    var data = new FormData();
    state.register = arrayData;

    data.append("agreements_approved", state.register.agreements_approved);
    
    state.loading = true;
    this.$axios.post("/Register/step2", data).then((res) => {

    }).catch((error) => {
      state.loading = false;
    });
  },
}

const mutations = {


}
export default {
  state,
  getters,
  actions,
  mutations
};
