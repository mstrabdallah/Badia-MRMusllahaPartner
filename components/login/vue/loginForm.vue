<template>
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
      :rules="[$rules.required, $rules.min]"
      outlined
      dense
    ></v-text-field>
    <div class="LForgotPassword">
      <NuxtLink :to="localePath('/Forgot-Password')">{{
        $t("Forgot Password ?")
      }}</NuxtLink>
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
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Msg from "../../register/vue/msg.vue";
export default {
  components: {
    Msg,
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
   
      if (this.$refs.form.validate() === false) return false;
      this.Login(this.data);
    },
  },
};
</script>
 


<style scoped>

.button_login {
  width: 100%;
  margin-top: 30px;
}

.LForgotPassword {
  margin-top: -16px;
  display: block;
  position: relative;
  text-align: right;
}
.LForgotPassword:lang(ar) {
  text-align: left;
}
</style>