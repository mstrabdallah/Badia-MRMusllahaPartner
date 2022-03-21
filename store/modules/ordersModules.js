
const state = {
    loading: true,
    orders:[]
  
  };
  
  const getters = {
    allOrders: state => state
  }; 
  
  const actions = {
  
    async getOrder({ state }) {
      state.loading = true;
      await this.$axios.get("/Order?include=partner").then((res) => {
          state.orders = res.data;
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
  