export { default as Index } from '../../components/index/index.vue'
export { default as IndexPartner } from '../../components/index/indexPartner.vue'
export { default as Register } from '../../components/register/register.vue'
export { default as Login } from '../../components/login/login.vue'
export { default as OrdersBoxOrder } from '../../components/orders/box-order.vue'
export { default as Orders } from '../../components/orders/index.vue'
export { default as IndexVueServices } from '../../components/index/vue/Services.vue'
export { default as IndexVueBox } from '../../components/index/vue/box.vue'
export { default as IndexVueHead } from '../../components/index/vue/head.vue'
export { default as IndexVueMobileApp } from '../../components/index/vue/mobileApp.vue'
export { default as RegisterVueStep1FormRegister } from '../../components/register/vue/step1-formRegister.vue'
export { default as RegisterVueStep1Otp } from '../../components/register/vue/step1-otp.vue'
export { default as RegisterVueStep2 } from '../../components/register/vue/step2.vue'
export { default as RegisterVueStep3 } from '../../components/register/vue/step3.vue'
export { default as RegisterVueStep4 } from '../../components/register/vue/step4.vue'
export { default as RegisterVueStep5 } from '../../components/register/vue/step5.vue'
export { default as RegisterVueStep6 } from '../../components/register/vue/step6.vue'
export { default as RegisterVueStep7 } from '../../components/register/vue/step7.vue'
export { default as RegisterVueStepper } from '../../components/register/vue/stepper.vue'
export { default as UserVueEditUserDetails } from '../../components/user/vue/editUserDetails.vue'
export { default as UserVueMenuAccount } from '../../components/user/vue/menuAccount.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
