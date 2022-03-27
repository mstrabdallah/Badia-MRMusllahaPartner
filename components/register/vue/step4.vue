<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("Select the city and area covered") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <div class="form_body">
          <div class="mt-4 mb-4">
            <v-select
              :items="allCity.city"
              item-text="name"
              item-value="id"
              :label="$t('City')"
              v-model="data.city_id"
              :rules="[$rules.required]"
              dense
              outlined
            ></v-select>
          </div>

          <div class="coverage_area">
            <v-slider
              v-model="data.coverage_area"
              :label="$t('coverage area')"
              thumb-color="red"
              thumb-label="always"
              max="50"
              min="5"
              :rules="[$rules.required]"
              step="5"
              ticks
            >
              <template v-slot:thumb-label="{ value }">
                {{ value }} kg
              </template>
            </v-slider>
          </div>
        </div>

<Msg />
        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step4Function"
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
  components:{
    Msg
  },
  data: () => ({
    valid: false,
    data: {
      city_id: "",
      coverage_area: "",
    },
    rules: {
      required: (v) => !!v || "Required.",
    },
  }),
  computed: {
    ...mapGetters(["allCity"]),
  },
  mounted() {
 //   this.getCity();
        if (this.$store.state.auth.step ===4) this.getCity();

  },
  methods: {
    ...mapActions(["registerStep4", "getCity"]),

    Step4Function(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.registerStep4(this.data);
    },
  },
};
</script>
 
