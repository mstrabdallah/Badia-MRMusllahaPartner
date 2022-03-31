
const state = {
  loading: true,
  loadingAc: false,
  loadingA2: false,
  loadingA: false,
  orders: [],
  pending:[],
  paramters: '',
  msg: ''
};

const getters = {
  allOrders: state => state
};

const actions = {

  async getOrder({ state }, { paramters, page = 1 }) {

    if (paramters != null) state.paramters = paramters;
    state.loading = true;
    state.orders = []
    await this.$axios.get("/Order?" + state.paramters + "&include=customer,address,services,category&page=" + page).then((res) => {
      state.orders = res.data;
      state.loading = false;
    });
  },

  async getOrderPending({ state }) {
    state.loadingP = true;
    state.pending = []
    await this.$axios.get("/Order/pending?include=customer,category,address,services").then((res) => {
      state.pending = res.data;
      state.loadingP = false;
    });
  },

  acceptOrder({ state, dispatch }, paramters) {
    state.loadingA = true;
    var data = new FormData();
    this.$axios.post("/Order/acceptOrder/" + paramters, data).then((res) => {
      if (res.data.status === 200) {
        dispatch('getOrderPending')
      }
      state.loadingA = false;
    });
  },


  inWayOrder({ state, dispatch }, paramters) {
    state.loadingA2 = true;
    var data = new FormData();

    this.$axios.post("/Order/inWayOrder/" + paramters, data).then((res) => {
      if (res.data.status === 200) {
        dispatch('getOrder', state.paramters)
      }
      state.loadingA2 = false;
    });
  },

  startOrder({ state, dispatch }, paramters) {
    state.loadingA2 = true;
    var data = new FormData();

    this.$axios.post("/Order/startOrder/" + paramters, data).then((res) => {
      if (res.data.status === 200) {
        dispatch('getOrder', state.paramters)
      }
      state.loadingA2 = false;
    });
  },


  rescheduleOrder({ state }, paramters) {
    state.loadingA = true;
    var data = new FormData();

    this.$axios.post("/Order/rescheduleOrder/" + paramters,data).then((res) => {
      if (res.data.status === 200) {
        dispatch('getOrder', state.paramters)
      }
      state.loadingA = false;
    });
  },

  cancelOrder({ state, dispatch }, paramters) {
    state.loadingAc = true;
    var data = new FormData();

    this.$axios.post("/Order/cancelOrder/" + paramters, data).then((res) => {
      if (res.data.status === 200) {
        dispatch('getOrder', state.paramters)
      }
      state.loadingAc = false;
    });
  },


  completeOrder({ state, dispatch }, paramters) {
    state.loadingA2 = true;
    var data = new FormData();

    this.$axios.post("/Order/completeOrder/" + paramters, data).then((res) => {
      if (res.data.status === 200) {
        dispatch('getOrder', state.paramters)
      }
      state.loadingA2 = false;
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
