<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("nationality and license") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="Step5Function"
        v-model="valid"
        lazy-validation
      >
        <div class="form_body">
          <p>Please choose a nationality ...</p>
          <div class="nationality">
            <div class="mt-4 mb-4">
              <v-select
                :items="items"
                dense
                label="nationality"
                outlined
                :rules="[rules.required]"
              ></v-select>
            </div>

            <v-file-input
              label="Click here to nationality file PDF"
              outlined
              dense
              :rules="[rules.required]"
            ></v-file-input>
          </div>
          <v-divider></v-divider>

          <div class="reg_license mt-8">
            <p>Please enter the license information</p>
            <v-text-field
              class="mt-6 mb-4"
              v-model="data.id_number"
              :counter="10"
              :label="$t('ID Number')"
              :rules="[rules.required, rules.idNumber]"
              required
              outlined
              dense
            ></v-text-field>

            <v-file-input
              label="Click here to Upload license iamge"
              outlined
              dense
              @change="onFileChange"
              :v-model="data.license_file"
            ></v-file-input>

            <div class="preview s">
              <img v-if="license_view" :src="license_view" />
            </div>
          </div>
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step5Function"
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
    license_view: null,
    ex3: { val: 5, color: "red" },
    data: {
      license_file: null,
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
    ...mapActions(["registerStep5"]),

    Step5Function(e) {
      e.preventDefault();
      //if (this.$refs.form.validate() === false) return false;
      this.registerStep5(this.data);
    },

    onFileChange(e) {
      if (e) this.license_view = URL.createObjectURL(e);
      else this.license_view = null;
    },
  },
};
</script>
 
