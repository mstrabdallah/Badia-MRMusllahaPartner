<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("Workplace") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="Step6Function"
        v-model="valid"
        lazy-validation
      >
        <div class="form_body">
          <p>Please select Workplace images to display to the user ...</p>

          <div class="mt-8">
            <v-file-input
              label="Click here to Upload Workplace images"
              outlined
              dense
              multiple
              @change="onFileChange"
              :v-model="data.license_file"
            ></v-file-input>

            <div class="preview m">
              <!-- <img v-if="license_view.length>0" :v-for="image in license_view" :src="image.url" /> -->

            
    
              <img  v-for="(item,i) in license_view" :key="i" :src="item.url" />

           
            </div>
          </div>
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step6Function"
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
    license_view: [],
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
    ...mapActions(["registerStep6"]),

    Step6Function(e) {
      e.preventDefault();
      //if (this.$refs.form.validate() === false) return false;
      this.registerStep6(this.data);
    },

    onFileChange(e) {
      if (e.length>0)
        e.forEach((element) => {
          this.license_view.push({ url: URL.createObjectURL(element) });
          
        });
      else this.license_view = null;
    },
  },
};
</script>
 
