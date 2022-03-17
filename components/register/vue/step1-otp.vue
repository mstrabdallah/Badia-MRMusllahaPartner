<template>
 
      <div class="form_login_cc" v-if="this.$store.state.auth.step === 2">
        <div class="form_login">
          <div class="form_title">
            <div class="mb-5">
              {{ $t("Please enter the activation code") }}
          </div>

          <div class="form">
            <v-form
              ref="form"
              @submit="Step1Function"
              v-model="valid"
              lazy-validation
            >

              <div>
    <div class="ma-auto position-relative" style="max-width: 300px">
      <v-otp-input
        v-model="otp"
        :disabled="loading"
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

              <v-btn
                :disabled="!valid"
                color="success"
                class="button_login"
                @click="Step1Function"
                :loading="loading"
              >
                {{ $t("Register") }}
              </v-btn>
            </v-form>
          </div>
        </div>
      </div>
    </div>
 
</template>

 
 
<script>
import {mapActions} from 'vuex'
  export default {
    data: () => ({
      loading: false,
      snackbar: false,
      snackbarColor: 'default',
      otp: '',
      text: '',
      expectedOtp: '133707',
    }),
    methods: {
       ...mapActions(["registerStep1"]),
    
      onFinish (e) {
        this.loading = true
        this.registerStep1(this.otp)
      },
    },
  }
</script>

<style scoped>
 
</style>