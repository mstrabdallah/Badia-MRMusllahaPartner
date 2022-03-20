
const state = {
  loading: true,
  loadingsub: false,
  category: [],
  sub:[],

};

const getters = {
  allCategory: state => state
};

const actions = {

  async getCategory({ state }) {
    state.loadingsub = true;
    state.loading = true;
    await this.$axios.get("/Category").then((res) => {
        state.category = res.data.data;
        state.loading = false;
      });
  },


  async getCategorySub({ state },id) {
   
    state.loadingsub = true;
    await this.$axios.get("/Category?parent="+id).then((res) => {
        state.sub = res.data.data;
        state.loadingsub = false;
       
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
