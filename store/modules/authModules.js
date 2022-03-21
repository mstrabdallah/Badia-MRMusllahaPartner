//export const namespaces = true

const state = {
  checkAuth: false,
  step: 1,
  stepSub: 1,
  is_active: 0,
  token: '',
  device: 'website',
  sessionId: '1234567',
  user: [],
  register: [],
  loading: false,
  checkUserStatus: false,
  loadingReg: true,
  
};

const getters = {
  allAuth: state => state

};

const actions = {

  routerTo() {
    if (this.$i18n.locale === "en") {
      window.location.href = "/";
    } else {
      window.location.href = "/ar";
    }
  },
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

  getToken({ app, state, dispatch }) {
    if (state.checkAuth === true) return false;
    const response = this.$axios.$get('/check_token').then((res) => {
      if (res.status) {
        state.token = res.token;
        this.$cookies.set("token", res.token, {
          path: "/",
          maxAge: 365 * 24 * 60 * 60,
        });
      } else {

      }

    }).catch(function (error) {
      // if (error.response.status === 401) {


      // }
    });
  },
  Login({ app, state, dispatch }, arrayData) {

    var data = new FormData();
    data.append("phone_number", arrayData.phone_number.replace(/\s/g, ''));
    data.append("password", arrayData.password);
    state.loading = true;
    const response = this.$axios.$post('/me/login', data).then((res) => {
      state.loading = false;

      if (res.status === 200) {

        state.is_active = res.data.is_active;
        this.$cookies.set("iA", res.data.is_active, {
          path: "/",
          maxAge: 365 * 24 * 60 * 60,
        });
        // window.location.href = "/";
        dispatch('routerTo');
      }
      //state.token = res.token;

    }).catch(function (error) {
      // if (error.response.status === 401) {
      state.loading = false;

      // }
    });
  },


  getMe({ state }) {

    //  state.loadingReg = true;
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
  registerStep1({ state }, arrayData) {
    var data = new FormData();

    if (state.stepSub === 2)
      data.append("verification_code", arrayData);
    else
      state.register = arrayData;

    data.append("name", state.register.name);
    data.append("phone", state.register.phone.replace(/\s/g, ''));
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

  registerStep2({ state }, arrayData) {
    console.log('arrayData ...', arrayData)
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

  registerStep3({ state }, arrayData) {

    var data = new FormData();
    state.register = arrayData;

    data.append("category_id", state.register.category_id);
    for (var i = 0; i < state.register.sub_category_id.length; i++) {
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

  registerStep4({ state }, arrayData) {

    var data = new FormData();
    state.register = arrayData;
    data.append("city_id", state.register.city_id);
    data.append("coverage_area", state.register.coverage_area);

    state.loading = true;
    this.$axios.post("/Register/step4", data).then((res) => {
      state.loading = false;
      state.step = 5;
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep5({ state }, arrayData) {

    var data = new FormData();
    state.register = arrayData;

    data.append("nationality_id", state.register.nationality_id);
    data.append("nationality_file", state.register.nationality_file);
    data.append("license", state.register.license);
    data.append("license_file", state.register.license_file);

    state.loading = true;
    this.$axios.post("/Register/step5", data).then((res) => {
      state.loading = false;
      state.step = 6;

    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep6({ state, dispatch }, arrayData) {
    var data = new FormData();
    state.register = arrayData;

    data.append("workshop_front", state.register.workshop_front);

    for (var i = 0; i < state.register.images.length; i++) {
      data.append("images[][file]", state.register.images[i]);
    }

    state.loading = true;
    this.$axios.post("/Register/step6", data).then((res) => {
      state.loading = false;
      state.step = 7;
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep7({ state }, arrayData) {
    var data = new FormData();
    state.register = arrayData;

    data.append("agreements_approved", 1);
    state.loading = true;
    this.$axios.post("/Register/step7", data).then((res) => {

      alert('done')
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
