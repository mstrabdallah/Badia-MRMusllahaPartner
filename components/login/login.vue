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

          <div class="form">
            <v-form ref="form" v-model="valid" lazy-validation>
              <vue-phone-number-input
                v-model="data.phone_number"
                v-bind="vuePhone.props"
                class="mb-7"
                @update="data.code = $event.countryCallingCode"
              ></vue-phone-number-input>

              <v-text-field
                v-model="data.password"
                :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPasswordLogin ? 'text' : 'password'"
                :label="$t('Password')"
                @click:append="showPasswordLogin = !showPasswordLogin"
                :rules="[$rules.required]"
                outlined
                dense
              ></v-text-field>
              <div class="LForgotPassword">
                <NuxtLink :to="localePath('/Forgot-Password')">{{$t('Forgot Password ?')}}</NuxtLink>
              </div>
              <Msg />

              <v-btn
                :disabled="!valid"
                color="success"
                class="button_login"
                @click="LoginFunction"
                :loading="allAuth.loading"
                type="submit"
              >
                {{ $t("Login") }}
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Msg from "../register/vue/msg.vue";
export default {
  components: {
    Msg,
  },
  head() { 
    return {
      title: this.$i18n.t("Login"),
    };
  },
  data() {
    return {
      vuePhone: {
        phone: "",
        results: [],
        props: {
          clearable: true,
          fetchCountry: true,
          noExample: false,
          translations: {
            countrySelectorLabel: this.$i18n.t("Country code"),
            countrySelectorError: this.$i18n.t("error"),
            phoneNumberLabel: this.$i18n.t("Enter Your Phone"),
            example: this.$i18n.t("Example :"),
          },
        },
      },

      valid: false,
      showPasswordLogin: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      data: {
        phone_number: "",
        password: "",
        code: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions(["Login"]),

    LoginFunction(e) {
      e.preventDefault();
      alert(this.$refs.form.validate())
      if (this.$refs.form.validate() === false) return false;
      this.Login(this.data);
    },
  },
};
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
.button_login {
  width: 100%;
  margin-top: 30px;
}

.LForgotPassword {
    margin-top: -16px;
    display: block;
    position: absolute;}
</style>