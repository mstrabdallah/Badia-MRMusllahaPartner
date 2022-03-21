<template>
  <div class="form_register" v-if="this.$store.state.auth.stepSub === 1">
    <h3 class="mb-5">
      {{ $t("Enter your basic information") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="Step1Function"
        v-model="valid"
        lazy-validation
      >
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
            :label="$t('Phone')"
            placeholder="Enter Mobile Number"
            class="mb-7"
            default-country-code="SA"
            required
            :rules="[rules.required, rules.phoneVal, rules.phoneNum]"
            phoneNumber="0665656565"
            v-bind="props"
          />

 
          <v-text-field
            v-model="data.email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.password"
            :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPasswordLogin ? 'text' : 'password'"
            :label="$t('Password')"
            @click:append="showPasswordLogin = !showPasswordLogin"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="password_confirmation"
            :append-icon="showPasswordLogin ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPasswordLogin ? 'text' : 'password'"
            :label="$t('Re-enter the password')"
            @click:append="showPasswordLogin = !showPasswordLogin"
            outlined
            dense
          ></v-text-field>

          <v-expansion-panels class="mb-6">
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                More Options
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

        <div class="msg" v-if="msg">
          <p>{{ $t(msg) }}</p>
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step1Function"
          :loading="this.$store.state.auth.loading"
        >
          {{ $t("Next") }}
        </v-btn>
      </v-form>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: false,
    showPasswordLogin: false,
    props: {
      placeholder: "Enter your phone",
    },
    comments: {

},
    data: {
      name: "",
      phone: "",
      email: "",
      referral: "",
      password: "",
      checkbox: false,
      password_confirmation: "",
    },
    msg: "",
    msgStatus: true,
    rules: {
      required: (v) => !!v || "Required.",
      email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      phoneVal: (v) =>
        (v && v.length <= 11) || "Phone must be less than 11 Number",
      phoneNum: (v) =>
        Number.isInteger(Number(v)) || "The value must be an integer number",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.password_confirmation || "Password must match";
    },
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
 
