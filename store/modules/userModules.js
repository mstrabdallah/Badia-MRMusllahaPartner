 
const state = {
    loading: false,
    online: false,
    msgPassword: null,
    changePasswordDone: false,
    msgInfo: null,
    msgInfoDone: false,
    menuHeader: false,
    overlay: false


};

const getters = {
    allUsers: state => state
};


const actions = {

    // routerToPage({ }, data) {
 
    //     if (this.$i18n.locale === 'en')
    //       //  return router.redirect(data)
    //         this.$router.push(data)
    //     else
    //     this.$router.push('/ar'+data)
    //      //   return router.redirect('/ar' + data)
    // },
    changeMenuHeader({ state }, data) {
        state.menuHeader = data
    },
    setOverlay({ state }, data) {
        state.overlay = data
    },

    async changeLanguage({ state }, data) {
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

    setBankDetails({ state }, arrayData) {
        var data = new FormData();
        data.append("bank_name", arrayData.bank);
        data.append("bank_account_no", arrayData.bankAccountNo);
        data.append("bank_iban", arrayData.iban);
    
        state.loading = true;
        state.msgBank = null;
        state.setBankDetailsDone = false;
    
        this.$axios
          .post("/me/updateBankDetails", data)
          .then((res) => {
            state.loading = false;
    
            if (res.data.status == 200) {
              state.msgBank = res.data.msg;
              state.setBankDetailsDone = true;
            } else {
              state.msgBank = res.data.msg;
            }
          })
          .catch((error) => {
            state.loading = false;
          });
      },
      withdraw({ state }, arrayData) {
        var data = new FormData();
        data.append("amount", arrayData);
    
        state.loading = true;
        state.msgWithdraw = null;
        state.withdrawDone = false;
    
        this.$axios
          .post("/Withdraw/add", data)
          .then((res) => {
            state.loading = false;
    
            if (res.data.status == 200) {
              state.msgWithdraw = res.data.msg;
              state.withdrawDone = true;
            } else {
              state.msgBank = res.data.msg;
            }
          })
          .catch((error) => {
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
