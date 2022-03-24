<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("agreements approved") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <div class="form_body">
          <p>Before starting, the agreements must be approved</p>
          <div class="agreements_s">
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
        </div>

        <Msg />
        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step7Function"
          type="submit"
          :loading="this.$store.state.auth.loading"
        >
          {{ $t("Start Using The Site") }}
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
  data: () => ({
    valid: false,
    on: false,
    data: {
      agreements_approved: false,
    },
    rules: {
      required: (v) => !!v || "Required.",
    },
  }),

  methods: {
    ...mapActions(["registerStep7"]),

    Step7Function(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.registerStep7(this.data);
    },
  },
};
</script>
 
<style scoped>
.agreements_s {
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid #cccc;
}
</style>