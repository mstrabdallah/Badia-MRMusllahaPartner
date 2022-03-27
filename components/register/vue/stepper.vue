
<template>
  <v-stepper v-model="this.$store.state.auth.step">
    <v-stepper-header>
      <v-stepper-step :complete="this.$store.state.auth.step > 1" step="1"
        >{{$t('The Basic Information')}}</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="this.$store.state.auth.step > 2" step="2">
       {{$t('The Personal Information')}}
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="this.$store.state.auth.step > 3" step="3"
        >{{$t('Choose Categories')}}</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="this.$store.state.auth.step > 4" step="4"
        >{{$t('Coverage Area')}}</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="this.$store.state.auth.step > 5" step="5"
        >{{$t('Nationality And License')}}</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="this.$store.state.auth.step > 6" step="6"
        >{{$t('Workplace')}}</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="this.$store.state.auth.step > 7" step="7"
        >{{$t('Agreements Approve')}}</v-stepper-step
      >
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <Step1FormRegister />
        <Step1OTP />
      </v-stepper-content>

      <v-stepper-content step="2">
        <Step2 />
      </v-stepper-content>

      <v-stepper-content step="3">
        <Step3 />
      </v-stepper-content>

      <v-stepper-content step="4">
        <Step4 />
      </v-stepper-content>

      <v-stepper-content step="5">
        <Step5 />
      </v-stepper-content>
      <v-stepper-content step="6">
        <Step6 />
      </v-stepper-content>

      <v-stepper-content step="7">
        <Step7 />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Step1FormRegister from "./step1-formRegister.vue";
import Step1OTP from "./step1-otp.vue";
import Step2 from './step2.vue'
import Step3 from "./step3.vue";
import Step4 from "./step4.vue";
import Step5 from "./step5.vue";
import Step6 from "./step6.vue";
import Step7 from './step7.vue'
export default {
  data() {
    return {};
  },

  methods: {},
  components: {
    Step1FormRegister,
    Step1OTP,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7
  },
};
</script>