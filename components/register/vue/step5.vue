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
                :items="allCity.country"
                item-text="co_name"
                item-value="id"
                dense
                label="nationality"
                outlined
                :rules="[rules.required]"
                v-model="data.nationality_id"
                :disabled="allCity.loading"
              ></v-select>
            </div>

            <v-file-input
              label="Click here to nationality file PDF"
              outlined
              dense
              :rules="[rules.required]"
              v-model="data.nationality_file"
            ></v-file-input>
          </div>
          <v-divider></v-divider>

          <div class="reg_license mt-8">
            <p>license information (optional)</p>
            <v-text-field
              class="mt-6 mb-4"
              v-model="data.license"
              :counter="20"
              :label="$t('ID Number')"
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
              prepend-icon="mdi-camera"
            ></v-file-input>

            <div v-if="license_view" class="preview s">
              <img :src="license_view" />
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
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    valid: false,
    license_view: null,
    data: {
      nationality_id: null,
      nationality_file: "",
      license: "",
      license_file: "",
    },
    rules: {
      required: (v) => !!v || "Required.",
    },
  }),
  computed: {
    ...mapGetters(["allCity", "allAuth"]),
  },
  mounted() {
    if (this.allAuth.step === 5) this.getCountry();
  },
  methods: {
    ...mapActions(["registerStep5", "getCountry"]),

    Step5Function(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.registerStep5(this.data);
    },

    onFileChange(e) {
      if (e) this.license_view = URL.createObjectURL(e);
      else this.license_view = null;
    },
  },
};
</script>
 
