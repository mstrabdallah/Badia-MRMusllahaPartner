<template>
  <div class="page container_cc">
    <div class="login">
      <h1>{{ $t("Login") }}</h1>

      <div class="form_login_cc">
        <div class="form_login">
          <div class="form_title">
            <div class="mb-5">
              {{ $t("Enter your login information to continue") }}
            </div>
          </div>

         <LoginForm />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LoginForm from './vue/loginForm.vue'
export default {
  components: {
    LoginForm
  },
  head() {
    return {
      title: this.$i18n.t("Login"),
    };
  },
 
}
 
</script>
 


<style scoped>
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
 
</style>