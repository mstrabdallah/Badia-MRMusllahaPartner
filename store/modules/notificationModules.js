
const state = {
    loading: true,
    notifications:[]
  
  };
  
  const getters = {
    allNotifications: state => state
  }; 
  
  const actions = {
  
    async getNotifications({ state }) {
      state.loading = true;
      await this.$axios.get("/Notification").then((res) => {
          state.notifications = res.data;
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
  