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
          <h3>Please select workplace photos</h3>

          <p class="mt-4">The main picture of the workshop</p>

          <v-file-input
            label="Click here to Upload The main picture "
            outlined
            dense
            @change="onFileChangeBesic"
            v-model="data.workshop_front"
            prepend-icon="mdi-camera"
            :rules="[rules.required]"
            required
          ></v-file-input>

          <div v-if="image_view" class="preview s">
            <img :src="image_view" />
          </div>

          <p class="mt-4 p_x00">
            The number of the specified image must be between 3 to 5 images, it
            should not be reduced, and it should not increase
          </p>

          <div class="mt-2">
            <v-file-input
              label="Click here to Upload Workplace images"
              outlined
              dense
              multiple
              @change="onFileChange"
              v-model="data.images"
              prepend-icon="mdi-camera"
              :rules="[rules.required]"
              required
            ></v-file-input>

            <div class="msgStep6" v-if="msgStatus">
              {{ msg }}
            </div>

            <div class="preview m">
              <img v-for="(item, i) in license_view" :key="i" :src="item.url" />
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
    image_view: null,
    msg: "",
    msgStatus: false,
    data: {
      images: [],
      workshop_front:null
    },
    rules: {
      required: (v) => !!v || "Required.",
    },
  }),

  methods: {
    ...mapActions(["registerStep6"]),

    Step6Function(e) {
      e.preventDefault();
      if (this.data.images.length > 5 || this.data.images.length < 3)
        return false;
      if (this.$refs.form.validate() === false) return false;
     this.registerStep6(this.data);
     },

    onFileChangeBesic(e) {
      if (e) this.image_view = URL.createObjectURL(e);
      else this.image_view = null;
    },
    onFileChange(e) {
      if (e.length > 0) {
        this.msgStatus = false;
        this.license_view = [];

        if (e.length > 5 || e.length < 3) {
          this.msgStatus = true;
          this.data.images = [];
          this.license_view = [];
          this.msg =
            "The number of the specified image must be between 3 to 5 images, it should not be reduced, and it should not increase";

          return false;
        }
        this.msgStatus = false;

        e.forEach((element) => {
          this.license_view.push({ url: URL.createObjectURL(element) });
        });
      } else this.license_view = [];
    },
  },
};
</script>
 
<style scoped>
.msgStep6 {
  color: #f00;
  border: 1px solid;
  padding: 10px;
  border-radius: 4px;
}
.p_x00 {
  border-top: 1px solid #f2f2f2;
  padding-top: 30px;
}
</style>