<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("agreements approved") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="Step7Function"
        v-model="valid"
        lazy-validation
      >
        <div class="form_body">
          <p>Before starting, the agreements must be approved</p>

          <v-checkbox
            :rules="[rules.required]"
            v-model="data.agreements_approved"
          >
            <template v-slot:label>
              <div>
                By continuing, you agree to
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <a
                      target="_blank"
                      href="https://vuetifyjs.com"
                      @click.stop
                      v-on="on"
                    >
                      the Terms and Conditions
                    </a>

                    and

                    <a
                      target="_blank"
                      href="https://vuetifyjs.com"
                      @click.stop
                      v-on="on"
                    >
                      Privacy Policy
                    </a>
                  </template>
                </v-tooltip>
              </div>
            </template>
          </v-checkbox>
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step7Function"
          :loading="this.$store.state.auth.loading"
        >
          {{ $t("Start Using The Site") }}
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
    on: false,
    data: {
      agreements_approved: false,
    },
    rules: {
      required: (v) => !!v || "Required.",
      idNumber: (v) => (v && v.length <= 10) || "id number must be 10 Number",
    },
  }),

  methods: {
    ...mapActions(["registerStep7"]),

    Step7Function(e) {
      e.preventDefault();
      //if (this.$refs.form.validate() === false) return false;
      this.registerStep7(this.data);
    },

    onFileChange(e) {
      if (e.length > 0)
        e.forEach((element) => {
          this.license_view.push({ url: URL.createObjectURL(element) });
        });
      else this.license_view = null;
    },
  },
};
</script>
 
