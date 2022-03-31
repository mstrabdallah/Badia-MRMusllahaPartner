<template>
  <div class="form_register">
    <h3 class="mb-5">
      {{ $t("Choose Categories") }}
    </h3>

    <div class="form">
      <v-form ref="form" v-model="valid" lazy-validation>
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
              :label="$t('Main Category')"
              @change="changeCategory"
              v-model="data.category_id"
              :rules="[$rules.required]"
              :disabled="allCategory.loading"
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
                  :label="$t('Sub Category')"
                  :rules="[$rules.required]"
                  :disabled="allCategory.loading"
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

        <Msg />
        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="Step3Function"
          type="submit"
          :loading="allCategory.loading"
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
    if(this.allAuth.step === 3) this.getCategory()
  },

  computed: {
    ...mapGetters(["allCategory", "allAuth"]),
  },

  methods: {
    ...mapActions(["registerStep3", "getCategory", "getCategorySub"]),

    fun() {
      alert();
    },
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
 
