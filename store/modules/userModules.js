
const state = {
    loading: false,
    online: false,
    msgPassword: null,
    changePasswordDone: false,
    msgInfo: null,
    msgInfoDone: false,


};

const getters = {
    allUsers: state => state
};

const actions = {

    async changeLanguage({ state},data){
        await this.$cookies.set("lang", data, { path: "/", maxAge: 365 * 24 * 60 * 60 });
        location.reload();
      },

    changeInfo({ state }, arrayData) {

        var data = new FormData();
        data.append("name", arrayData.name);
        data.append("email", arrayData.email);

        state.loading = true;
        state.msgInfo = null;
        state.msgInfoDone = false

        this.$axios.post("/me/updateProfile", data).then((res) => {
            state.loading = false;

            if (res.data.status == 200) {
                state.msgInfo = res.data.msg;
                state.msgInfoDone = true
                location.reload();

            } else {
                state.msgInfo = res.data.msg;
            }
        }).catch((error) => {
            state.loading = false;
        });
    },


    changePassword({ state }, arrayData) {

        var data = new FormData();
        data.append("old_password", arrayData.old_password);
        data.append("new_password", arrayData.new_password);
        data.append("new_password_confirmation", arrayData.new_password_confirmation);

        state.loading = true;
        state.msgPassword = null;
        state.changePasswordDone = false

        this.$axios.post("/me/changePassword", data).then((res) => {
            state.loading = false;

            if (res.data.status == 200) {
                state.msgPassword = res.data.msg;
                state.changePasswordDone = true
            } else {
                state.msgPassword = res.data.msg;
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
