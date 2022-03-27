<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("We need your personal data to activate") }}
    </h3>

    <div class="form">
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="form_body">
          <v-radio-group :rules="[this.$rules.required]" v-model="data.type" row>
            <label>{{$t('Type')}} : </label>
            <v-radio :label="$t('Individual')" value="individual"></v-radio>
            <v-radio  :label="$t('Company')" value="company"></v-radio>
          </v-radio-group>

          <v-text-field
            class="mt-6"
            v-model="data.id_number"
            :counter="10"
            :label="[
              data.type === 'company'
                ? $t('commercial registration No.')
                : $t('ID No.'),
            ]"
            
            :rules="[this.$rules.required,this.$rules.min]"
            required
            outlined
            dense
          ></v-text-field>

          <v-divider></v-divider>

          <v-file-input
            class="mt-4"
            :label="[
              data.type === 'company'
                ? $t('copy of commercial registration')
                : $t('Click here to Upload Copy Of ID'),
            ]"
            outlined
            dense
            @change="onFileChange"
            :v-model="data.id_file"
             :rules="[this.$rules.required]"
            prepend-icon="mdi-camera"
            required
          ></v-file-input>

          <div v-if="url" class="preview s">
            <img :src="url" />
          </div>
        </div>

        <Msg />
        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step2Function"
          :loading="this.$store.state.auth.loading"
          type="submit"
        >
          {{ $t("NEXT") }}
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
 
  data() {
    return {
      valid: false,
      url: "",
      data: {
        type: "",
        id_number: "",
        id_file: "",
      },
      rules: {
        idNumber: (v) => (v && v.length <= 10) || "id number must be 10 Number",
      },
    };
  },

  methods: {
    ...mapActions(["registerStep2"]),

    Step2Function(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      console.log(this.data);
      this.registerStep2(this.data);
    },

    onFileChange(e) {
      this.data.id_file = e;
      if (e) this.url = URL.createObjectURL(e);
      else this.url = null;
    },
  },
};
</script>
 
