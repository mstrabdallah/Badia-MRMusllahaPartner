
const state = {
  loading: true,
  city: [],
  country:[]

};

const getters = {
  allCity: state => state
}; 

const actions = {

  async getCity({ state }) {
    state.loading = true;
    await this.$axios.get("/City").then((res) => {
        state.city = res.data.data;
        state.loading = false;
      });
  },

  async getCountry({ state }) {
    state.loading = true;
    await this.$axios.get("/Country").then((res) => {
        state.country = res.data.data;
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
