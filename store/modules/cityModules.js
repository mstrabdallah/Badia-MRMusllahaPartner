
const state = {
  loading: true,
  city: [],

};

const getters = {
  allCity: state => state
};

const actions = {

  async getCity({ state }) {
    state.loading = true;
    await this.$axios.get("/City").then((res) => {
        state.category = res.data.data;
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
