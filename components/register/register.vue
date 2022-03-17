<template>
  <div class="page container_cc">
    <div class="login">
      <h1>{{ $t("Register") }}</h1>

      <Step1FormRegister />
      <Step1OTP />
    </div>
  </div>
</template>


<script>
import Step1FormRegister from "./vue/step1-formRegister.vue";
import Step1OTP from "./vue/step1-otp.vue";
export default {
  head() {
    return {
      title: this.$i18n.t("Register-page"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "todos description",
          name: "todos description",
          content: "todos My custom description",
        },
      ],
    };
  },
  data: () => ({}),

  methods: {},
  components: {
    Step1FormRegister,
    Step1OTP,
  },
};
</script>
 
 

<style>
.login {
  margin-top: 24px;
  padding: 20px;
}
.login h1 {
  text-align: center;
}
.form_login_cc {
  max-width: 500px;
  background: #fff;
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
  border: 1px solid #f4f4f4;
  border-radius: 5px;
}
.button_login {
  width: 100%;
  margin-top: 30px;
}
</style>