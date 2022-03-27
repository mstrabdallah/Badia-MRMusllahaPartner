<template>
  <div class="form_register" v-if="this.$store.state.auth.stepSub === 1">
    <h3 class="mb-5">
      {{ $t("Enter Your Basic Information") }}
    </h3>

    <div class="form">
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="form_body">
          <v-text-field
            v-model="data.name"
            :counter="200"
            :label="$t('Name')"
            :rules="[rules.required]"
            required
            outlined
            dense
          ></v-text-field>

          <vue-phone-number-input
            v-model="data.phone"
            class="mb-7"
            required
            v-bind="vuePhone.props"
            @update="data.code = $event.countryCallingCode"
          />
           <v-text-field
            v-model="data.email"
            :rules="[rules.required, rules.email]"
            :label="$t('E-mail')"
            required
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.password"
            :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.passwordRules]"
            :type="showPasswordLogin ? 'text' : 'password'"
            :label="$t('Password')"
            @click:append="showPasswordLogin = !showPasswordLogin"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.password_confirmation"
            :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPasswordLogin ? 'text' : 'password'"
            :label="$t('Re-enter The Password')"
            @click:append="showPasswordLogin = !showPasswordLogin"
            :rules="[rules.required, rules.confirmPasswordRules]"
            outlined
            dense
          ></v-text-field>

          <v-expansion-panels class="mb-6">
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
               {{$t('More Options')}}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  v-model="data.referral"
                  :label="$t('Referral Code')"
                  outlined
                  dense
                ></v-text-field>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <Msg />

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step1Function"
          :loading="this.$store.state.auth.loading"
          type="submit"
        >
          {{ $t("NEXT") }}
        </v-btn>
      </v-form>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Msg from "./msg.vue";
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
      data: {
        name: "",
        phone: "",
        email: "",
        referral: "",
        password: "",
        checkbox: false,
        password_confirmation: "",
        code:""
      },
      msg: "",
      msgStatus: true,
      rules: {
        required: (v) => !!v || this.$i18n.t('Required'),
        email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        phoneVal: (v) =>
          (v && v.length <= 11) || "Phone must be less than 11 Number",
        phoneNum: (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
        min: (v) => v.length >= 8 || "Min 8 characters",
        passwordRules: (value) =>
          (value && value.length >= 6) || "minimum 6 characters or Number",
        confirmPasswordRules: (value) =>
          value === this.data.password ||
          "The password confirmation does not match.",
      },
    };
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  mounted() {},
  methods: {
    ...mapActions(["registerStep1"]),

    Step1Function(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.registerStep1(this.data);
    },
  },
};
</script>
 
