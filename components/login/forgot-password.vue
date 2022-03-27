<template>
  <div class="page container_cc">
    <div class="login">
      <h1>{{ $t("Forgot Password") }}</h1>

      <div class="form_login_cc">
        <div class="form_login">
          <div class="form_title">
            <div class="mb-5" v-if="allAuth.forgotStep === 1">
              {{ $t("Enter Your Phone") }}
            </div>
            <div class="mb-5" v-if="allAuth.forgotStep === 2">
              {{ $t("Activation code has been sent, please enter it here") }}
            </div>
            <div class="mb-5" v-if="allAuth.forgotStep === 3">
              {{ $t("Re-enter The new Password") }}
            </div>
          </div>

          <div class="form">
            <v-form ref="form" v-model="valid" lazy-validation>
              <div v-if="allAuth.forgotStep === 1">
                <vue-phone-number-input
                  v-model="data.phone_number"
                  v-bind="vuePhone.props"
                  class="mb-7"
                  @update="data.code = $event.countryCallingCode"
                ></vue-phone-number-input>
              </div>

              <div
                class="ma-auto position-relative"
                style="max-width: 300px"
                v-if="allAuth.forgotStep === 2"
              >
                <v-otp-input
                  v-model="data.verification_code"
                  :loading="allAuth.loading"
                  @finish="finish"
                ></v-otp-input>
              </div>

              <div v-if="allAuth.forgotStep === 3">
                <v-text-field
                  v-model="data.new_password"
                  :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.passwordRules]"
                  :type="showPasswordLogin ? 'text' : 'password'"
                  :label="$t('Enter the new password')"
                  @click:append="showPasswordLogin = !showPasswordLogin"
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="data.new_password_confirmation"
                  :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPasswordLogin ? 'text' : 'password'"
                  :label="$t('Re-enter The new Password')"
                  @click:append="showPasswordLogin = !showPasswordLogin"
                  :rules="[rules.required, rules.confirmPasswordRules]"
                  outlined
                  dense
                ></v-text-field>
              </div>

              <div v-if="allAuth.forgotStep === 4">
                <p>{{$t('The password has been changed successfully')}}</p>

                <NuxtLink :to="localePath('/login')">
                  <v-btn color="success" class="button_login">
                    {{ $t("Go to Login") }}
                  </v-btn>
                </NuxtLink>
              </div>
              <Msg />

              <v-btn
                :disabled="!valid"
                color="success"
                class="button_login"
                @click="forgotPasswordFunction"
                :loading="allAuth.loading"
                v-if="allAuth.forgotStep != 4"
                type="submit"
              >
                {{ $t(inputText) }}
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
      title: this.$i18n.t("Login-page"),
      meta: [
        {
          hid: "todos description",
          name: "todos description",
          content: "todos My custom description",
        },
      ],
    };
  },
  data() {
    return {
      inputText: "",

      vuePhone: {
        phone: "",
        results: [],
        inputText: "",
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
        required: (value) => !!value || this.$i18n.t('Required'),
        passwordRules: (value) =>
          (value && value.length >= 6) || "minimum 6 characters or Number",
        confirmPasswordRules: (value) =>
          value === this.data.new_password ||
          "The password confirmation does not match.",
      },
      data: {
        phone_number: "",
        verification_code: "",
        new_password: "",
        new_password_confirmation: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  mounted(){
    this.inputText= this.allAuth.forgotStep == 1 ? "Send OTP" : "NEXT";
  },
  methods: {
    ...mapActions(["forgotPassword"]),
    
    finish() {
      this.forgotPassword(this.data);
    },
    forgotPasswordFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.forgotPassword(this.data);
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
</style>    