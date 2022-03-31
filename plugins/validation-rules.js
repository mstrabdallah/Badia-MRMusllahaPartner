import Vue from 'vue'

export default ({app}) => {
   
    // You can use `this.$rules` anywhere in the Nuxt app.
    Vue.prototype.$rules = {
      required: v => !!v || app.i18n.t('Required'),
      min: (v) => v.length >= 6 || app.i18n.t('password'),
      email: (v) => /.+@.+\..+/.test(v) || app.i18n.t('Email must be valid'),
      number: (v) => {let p = /^[0-9]+$/g;return p.test(v) || app.i18n.t('This field must be numbers only.')},
      fileRequired: v => !!v || app.i18n.t('File is required'),
      filesRequired: v => (v && v.length > 0) || app.i18n.t('File is required')
    }
   }
