<template>
  <div class="container_cc">
    <div class="register">
      <h1>{{ $t("Register") }}</h1>

      <div class="loadingReg" v-if="this.$store.state.auth.loadingReg">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div v-else>
        <Stepper />
      </div>
    </div>
  </div>
</template>


<script>
import Stepper from "./vue/stepper.vue";
import { mapActions } from "vuex";
export default {
  head() {
    return {
      title: this.$i18n.t("Register-page"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "todos description",
          name: "todos description",
          content: "todos My custom description",
        },
      ],
    };
  },
  data: () => ({}),

  mounted() {
    this.getMe();
  },
  methods: {
    ...mapActions(["getMe"]),
  },
  components: {
    Stepper,
  },
};
</script>
 
 

<style>
.register {
  margin: 30px 0px;
}
.register h1 {
  margin-bottom: 30px;
}
.form_register {
  max-width: 500px;
  min-height: 400px;
  margin-top: 5px;
}

.loadingReg{
    min-height: 500px;
    margin-top: 5px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.form_register h3 {
  font-size: 18px;
}

.form_body {
  min-height: 300px;
  background: #fcfcfc;
  padding: 10px;
  border: 1px solid #f5f4f4;
  border-radius: 4px;
}
.register .sub {
  width: 100%;
  margin-top: 30px;
}

.preview.s {
  width: 100%;
  margin-top: 20px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 2px;
}

.preview.m {
  display: flex;
  flex-wrap: wrap;
  background: #eaeaea;
  border-radius: 5px;
}
.preview.m img {
  max-width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px;
}
.coverage_area {
  background: #fff;
  border-radius: 4px;
  padding: 7px;
  border: 1px solid #9c9c9c;
  display: flex;
  align-items: center;
  padding-top: 20px;
}
.v-slider__thumb-label {
  height: 40px !important;
  width: 40px !important;
}
</style>