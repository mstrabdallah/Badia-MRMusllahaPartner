<template>
      <div class="form_register" v-if="this.$store.state.auth.stepSub === 2">
         <h3 class="mb-5">
          {{ $t("Verify phone number") }}
        </h3>

        <div class="form">
          <v-form
            ref="form"
            @submit="Step1Function"
            v-model="valid"
            lazy-validation
          >
            <div class="form_body">
              <p class="mb-4 mt-4">
                We sent you the activation code over the phone, please enter here
              </p>
              <div class="ma-auto position-relative" style="max-width: 300px">
                <v-otp-input
                  v-model="otp"
                  :loading="this.$store.state.auth.loading"
                  @finish="onFinish"
                ></v-otp-input>
              </div>

              <v-snackbar
                v-model="snackbar"
                :color="snackbarColor"
                :timeout="2000"
              >
                {{ text }}
              </v-snackbar>
            </div>

            <div class="msg" v-if="msg">
              <p>{{ $t(msg) }}</p>
            </div>
            <div class="form_footer">
              <v-btn
                :disabled="!valid"
                color="success"
                class="sub"
                @click="Step1Function"
                :loading="this.$store.state.auth.loading"
              >
                {{ $t("Next") }}
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
</template>

 
 
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    snackbar: false,
    snackbarColor: "default",
    otp: "",
    text: "",
  }),
  methods: {
    ...mapActions(["registerStep1"]),

    onFinish(e) {
      this.registerStep1(this.otp);
    },
  },
};
</script>

<style scoped>
</style>