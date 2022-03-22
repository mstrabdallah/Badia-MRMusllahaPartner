
const state = {
    loading: true,
    earnings: [],
  
  };
  
  const getters = {
    allEarnings: state => state
  }; 
  
  const actions = {
  
    async getMyEarnings({ state }) {
      state.loading = true;
      await this.$axios.get("/me/getMyEarnings").then((res) => {
          state.earnings = res.data.data;
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
  