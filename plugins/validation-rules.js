import Vue from 'vue'

export default ({app}) => {
   
    // You can use `this.$rules` anywhere in the Nuxt app.
    Vue.prototype.$rules = {
      required: v => !!v || app.i18n.t('Required'),
      min: (v) => v.length >= 6 || app.i18n.t('password'),
    }
   }
 
