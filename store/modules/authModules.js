
//const code = navigator.userAgent;
const state = {
  checkAuth: false,
  step: 1,
  stepSub: 1,
  is_online: 0,
  token: null,
  device: 'website',
  sessionId: '',
  user: [],
  register: [],
  loading: false,
  checkUserStatus: false,
  loadingMe: true,
  errors: [],
  forgotStep: 1,
  dataProcess: [],
  sessionExpired: false,

};

const getters = {
  allAuth: state => state

};

const actions = {

  async setApi({ state, dispatch }, data) {

    await this.$axios.setHeader('session-id', data)
    await this.$axios.setHeader('device', state.device)
    await this.$axios.setHeader('lang', this.$i18n.locale)
    if (this.$cookies.get("token")) await this.$axios.setHeader('token', this.$cookies.get("token"))
    if (!this.$cookies.get("token")) await dispatch('getToken')

    //set state Api
    state.sessionId = data;

    //sId = session-id  -- for check if user agent changed
    if (!this.$cookies.get("sId")) this.$cookies.set("sId", data, { path: "/", maxAge: 365 * 24 * 60 * 60 });
    if (this.$cookies.get("sId") != data && state.checkAuth === true) state.sessionExpired = true;

    // get api when open site first time

    dispatch('getMe')

  },

  // async checkApi({ state, dispatch }) {
  //   if (this.$cookies.get("sId") != state.sessionId) {

  //     //set session-id again
  //     await this.$axios.setHeader('session-id', state.sessionId)
  //     await this.$cookies.set("sId", data, { path: "/", maxAge: 365 * 24 * 60 * 60 });

  //     await dispatch('getToken')

  //   }
  // },

  changeOnline({ state }) {
    state.loading = true;
    var data = new FormData();
    this.$axios.post("/me/changeStatus", data).then((res) => {
      state.loading = false;
      if (res.data.status === 200) {
        state.is_online = res.data.data.status;
      } else {
        alert('لدينا مشكلة سوف نعمل على حلها !')
      }
    });
  },
  changeSessionExpired({ state }) {
    state.sessionExpired = false;
  },

  routerTo({ }, reload = 1) {
    if (reload === 0) {
      if (this.$i18n.locale === "en")
        window.location.href = '/login'
      else
        window.location.href = '/ar/login'
    } else {
      if (this.$i18n.locale === "en")
        window.location.href = '/'
      else
        window.location.href = '/ar'
    }

  },

  async Logout({ dispatch }, reload = 1) {
    var data = new FormData();
    dispatch('setOverlay', true)
    await this.$axios.$post('/me/logout', data).then((res) => {
      dispatch('setOverlay', false)
      this.$cookies.remove('token');
      this.$cookies.remove('user');
      this.$cookies.remove('iA');
      this.$cookies.remove('sId');
      dispatch('routerTo', 0);

    })
  },

  async getToken({ app, state, dispatch }) {
    // alert(state.checkAuth)
    if (state.checkAuth === true) return false;
    const response = await this.$axios.$get('/check_token').then((res) => {

      if (res.status === 200) {
        state.token = res.token;

        this.$axios.setHeader('token', res.token)

        this.$cookies.set("token", res.token, {
          path: "/",
          maxAge: 365 * 24 * 60 * 60
        });
      } else {

      }

    }).catch(function (error) {
      // if (error.response.status === 401) {


      // }
    });
  },

  getMe({ state }) {

    const response = this.$axios.$get('/me').then((res) => {
      state.loadingMe = false;
      if (res.status === 401) {
        if(state.checkAuth){
          state.sessionExpired = true;
        }
        state.step = 1;     
      } else {
        state.step = res.data.current_step + 1;
        state.user = res.data;
        state.is_online = res.data.is_online

        state.token = res.token;
        this.$cookies.set("user", res.data, { path: "/", maxAge: 365 * 24 * 60 * 60 });
        this.$cookies.set("iA", res.data.is_active, { path: "/", maxAge: 365 * 24 * 60 * 60, });
      }
    }).catch(function (error) {

    });
  },

  async Login({ app, state, dispatch }, arrayData) {

    //set state
    state.loading = true;
    //
    var data = new FormData();
    data.append("phone_number", arrayData.phone_number.replace(/\s/g, ''));
    data.append("password", arrayData.password);
    data.append("code", arrayData.code);
    const response = this.$axios.$post('/me/login', data).then((res) => {
      state.loading = false;
      if (res.status === 200) {

        this.$cookies.set("user", res.data, { path: "/", maxAge: 365 * 24 * 60 * 60 });
        this.$cookies.set("iA", res.data.is_active, { path: "/", maxAge: 365 * 24 * 60 * 60 });

        dispatch('routerTo');
      } else {
        state.errors = res.msg;
      }

    }).catch(function (error) {
      // if (error.response.status === 401) {
      state.loading = false;

      // }
    });
  },


  forgotPassword({ state }, arrayData) {

    if (arrayData.phone_number === null) {
      alert(this.$i18n.t('Enter Your Phone'))
      return false
    }
    var data = new FormData();
    data.append("phone_number", arrayData.phone_number.replace(/\s/g, ''));
    data.append("verification_code", arrayData.verification_code);
    data.append("new_password", arrayData.new_password);
    data.append("new_password_confirmation", arrayData.new_password_confirmation);

    state.loading = true;

    var Url = '/me/forget/forgetPassword';
    if (state.forgotStep === 2)
      Url = '/me/forget/verifyCode'
    else if (state.forgotStep === 3)
      Url = '/me/forget/changePassword'

    this.$axios.post(Url, data).then((res) => {
      state.loading = false;

      if (res.data.status == 200) {
        if (state.forgotStep === 1) state.forgotStep = 2;
        else if (state.forgotStep === 2) state.forgotStep = 3;
        else if (state.forgotStep === 3) state.forgotStep = 4;
      } else {
        state.errors = res.data.msg;
      }
    }).catch((error) => {
      state.loading = false;
    });
  },

  setNext({ state }) {
    state.errors = [];
    state.loading = true;
  },
  async registerStep1({ state, dispatch }, arrayData) {
    dispatch('setNext')

    var data = new FormData();
    if (state.stepSub === 2)
      data.append("verification_code", arrayData);
    else
      state.register = arrayData;

    data.append("name", state.register.name);
    data.append("phone", '+20'+state.register.phone.replace(/\s/g, ''));
    data.append("email", state.register.email);
    data.append("referral", state.register.referral);
    data.append("password", state.register.password);
    data.append("password_confirmation", state.register.password);
    // data.append("code", state.register.code);

    this.$axios.post("/Register/step1", data).then((res) => {
      state.loading = false;


      if (res.data.status === 200) {
        if (state.stepSub === 1)
          state.stepSub = 2;
        else
          state.step = 2;
      }
      else {
        if (state.stepSub === 1)
          state.errors = res.data.errors;
        else
          state.errors = res.data.msg;
      }



    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep2({ state, dispatch }, arrayData) {
    dispatch('setNext')
    var data = new FormData();
    state.register = arrayData;

    data.append("id_number", state.register.id_number);
    data.append("type", state.register.type);
    data.append("id_file", state.register.id_file);


    state.loading = true;
    this.$axios.post("/Register/step2", data).then((res) => {
      state.loading = false;
      if (res.data.status === 200) {

        state.step = 3;
        dispatch('getCategory')
      } else {
        state.errors = res.data.msg;
      }

    }).catch((error) => {
      console.error(error.response)
      state.loading = false;
    });
  },

  registerStep3({ state ,dispatch}, arrayData) {
    dispatch('setNext')
    var data = new FormData();
    state.register = arrayData;

    data.append("category_id", state.register.category_id);
    for (var i = 0; i < state.register.sub_category_id.length; i++) {
      data.append("sub_category_id[]", state.register.sub_category_id[i]);
    }
    state.loading = true;
    this.$axios.post("/Register/step3", data).then((res) => {
      if (res.data.status === 200) {
        state.loading = false;
        state.step = 4;
        dispatch('getCity')
      } else {
        state.errors = res.data.msg;
      }

    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep4({ state,dispatch }, arrayData) {
    dispatch('setNext')
    var data = new FormData();
    state.register = arrayData;
    data.append("city_id", state.register.city_id);
    data.append("coverage_area", state.register.coverage_area);

    state.loading = true;
    this.$axios.post("/Register/step4", data).then((res) => {
      if (res.data.status === 200) {
        state.loading = false;
        state.step = 5;
        dispatch('getCountry')
      } else {
        state.errors = res.data.msg;
      }
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep5({ state,dispatch }, arrayData) {
    dispatch('setNext')
    var data = new FormData();
    state.register = arrayData;

    data.append("nationality_id", state.register.nationality_id);
    data.append("nationality_file", state.register.nationality_file);
    data.append("license", state.register.license);
    data.append("license_file", state.register.license_file);

    state.loading = true;
    this.$axios.post("/Register/step5", data).then((res) => {
      if (res.data.status === 200) {
        state.loading = false;
        state.step = 6;
      } else {
        state.errors = res.data.msg;
      }
    }).catch((error) => {
      state.loading = false;
    });
  },

  registerStep6({ state, dispatch }, arrayData) {
    dispatch('setNext')
    var data = new FormData();
    state.register = arrayData;

    data.append("workshop_front", state.register.workshop_front);

    for (var i = 0; i < state.register.images.length; i++) {
      data.append("images[][file]", state.register.images[i]);
    }

    state.loading = true;
    this.$axios.post("/Register/step6", data).then((res) => {
      state.loading = false;

      if (res.data.status === 200) {
        state.step = 7;
      } else {
        state.errors = res.data.msg;
      }


    }).catch((error) => {
      state.loading = false;
    });
  },

  async registerStep7({ state, dispatch }, arrayData) {
    dispatch('setNext')
    const currentToken = await this.$fire.messaging.getToken()

    var data = new FormData();
    state.register = arrayData;
    data.append("fcm", currentToken);
    data.append("agreements_approved", 1);
    state.loading = true;
    this.$axios.post("/Register/step7", data).then((res) => {


      if (res.data.status === 200) {
        this.$cookies.set("user", res.data.data, { path: "/", maxAge: 365 * 24 * 60 * 60 });

        this.$cookies.set("iA", res.data.data.is_active, { path: "/", maxAge: 365 * 24 * 60 * 60, });
        dispatch('routerTo');
      } else {
        state.errors = res.msg;
      }
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