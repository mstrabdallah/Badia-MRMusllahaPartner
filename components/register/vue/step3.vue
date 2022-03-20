<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("Categories") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="Step3Function"
        v-model="valid"
        lazy-validation
      >
        <div class="form_body">
          <div v-if="allCategory.loading">
            <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
          <div v-else>
            <v-select
              class="mt-2"
              :items="allCategory.category"
              item-text="name"
              item-value="id"
              label="Categories"
              @change="changeCategory"
              v-model="data.category_id"
              dense
              outlined
            ></v-select>

            <div v-if="subStatus">
              <div v-if="!allCategory.loadingsub">
                <v-select
                  v-model="data.sub_category_id"
                  :items="allCategory.sub"
                  item-text="name"
                  item-value="id"
                  chips
                  class="mt-2"
                  label="sub category"
                  multiple
                  dense
                  outlined
                ></v-select>
              </div>
              <div v-else>
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </div>
            </div>
          </div>
        </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step3Function"
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
    url: "",
    subStatus: false,
    data: {
      category_id: null,
      sub_category_id: [],
    },
    rules: {
      required: (v) => !!v || "Required.",
    },
  }),
  mounted() {
    this.getCategory();
  },
  computed: {
    ...mapGetters(["allCategory"]),
  },
  methods: {
    ...mapActions(["registerStep3", "getCategory", "getCategorySub"]),

    Step3Function(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.registerStep3(this.data);
    },

    changeCategory(e) {
      this.subStatus = true;
      this.getCategorySub(e);
    },
  },
};
</script>
 
