<template>
  <div class="form_login_cc" v-if="this.$store.state.auth.step === 1">
    <div class="form_login">
      <div class="form_title">
        <div class="mb-5">
          {{ $t("basic information") }}
        </div>

        <div class="form">
          <v-form
            ref="form"
            @submit="Step1Function"
            v-model="valid"
            lazy-validation
          >
            <div>
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
                class="mb-7"
                default-country-code="SA"
                required
                :rules="[rules.required, rules.phoneVal, rules.phoneNum]"
                phoneNumber="0665656565"
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

              <v-expansion-panels class="mb-6">
                <v-expansion-panel>
                  <v-expansion-panel-header expand-icon="mdi-menu-down">
                    More Options
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field
                      v-model="data.referral"
                      :label="$t('Referral Code')"
                      required
                      outlined
                      dense
                    ></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-checkbox :rules="[rules.required]" v-model="data.checkbox">
                <template v-slot:label>
                  <div>
                    I agree that
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="https://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          Vuetify
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                    is awesome
                  </div>
                </template>
              </v-checkbox>
            </div>

            <div class="msg" v-if="msg">
              <p>{{ $t(msg) }}</p>
            </div>

            <v-btn
              :disabled="!valid"
              color="success"
              class="button_login"
              @click="Step1Function"
              :loading="loading"
            >
              {{ $t("Next") }}
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    loading: false,
    valid: false,
    data: {
      name: "",
      phone: "",
      email: "",
      referral: "",
      password: "",
      checkbox: false,
    },
    msg: "",
    msgStatus: true,
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length <= 11) || "Phone must be less than 11 Number",
      (v) =>
        Number.isInteger(Number(v)) || "The value must be an integer number",
    ],
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
 
