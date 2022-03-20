<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("Select the city and area covered") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="Step4Function"
        v-model="valid"
        lazy-validation
      >
        <div class="form_body">
          <div class="mt-4 mb-4">
            <v-select :items="items" dense label="city" outlined></v-select>
          </div>

          <div class="coverage_area">
            <v-slider
              v-model="ex3.val"
              label="coverage area"
              :thumb-color="ex3.color"
              thumb-label="always"
              max="500"
            >
            <template v-slot:thumb-label="{ value }">
           {{value}} kg
          </template>
          </v-slider>
          </div>
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step4Function"
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
    url: "",
    ex3: { val: 5, color: "red" },
    data: {
      type: "",
      id_number: "",
      id_file: "",
    },
    rules: {
      required: (v) => !!v || "Required.",
      idNumber: (v) => (v && v.length <= 10) || "id number must be 10 Number",
    },
  }),

  methods: {
    ...mapActions(["registerStep4"]),

    Step4Function(e) {
      e.preventDefault();
      //if (this.$refs.form.validate() === false) return false;
      this.registerStep4(this.data);
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    onFileMultieChange(e) {
      const file = e.target.files;
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>
 
