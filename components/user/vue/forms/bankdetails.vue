<template>
  <div class="form_account">
    <h3 class="mb-5">
      {{ $t("Your Bank Details") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="setBankFunction"
        v-model="valid"
        lazy-validation
      >
        <div class="form_account_body">
          <v-text-field
            v-model="data.bank"
            :rules="[$rules.required]"
            :label="$t('Bank Name')"
            required
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.bankAccountNo"
            :counter="16"
            :label="$t('Bank Account Number')"
            :rules="[$rules.required, $rules.number]"
            required
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.iban"
            :label="$t('Bank Iban')"
            :rules="[$rules.required]"
            required
            outlined
            dense
          ></v-text-field>

          <div
            :class="[allUsers.msgInfoDone ? 'msgdone' : 'msgerror']"
            v-if="allUsers.msgInfo != null"
          > 
            {{ allUsers.msgInfo }}
          </div>
 <!-- <Msg /> -->
          <v-btn
            :disabled="!valid"
            color="success"
            class="sub"
            @click="setBankFunction"
            :loading="allUsers.loading"
          >
            {{ $t("Save") }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Msg from '../../../tools/msg.vue'
export default {
  components:{
   Msg 
  },
  data: () => ({
    valid: false,
    data: {
      bank: "",
      bankAccountNo: "",
      iban: "",
    },
    msg: "",
    msgStatus: true,
  }),
  computed: {
    ...mapGetters(["allUsers"]),
  },
  mounted() {},
  methods: {
    ...mapActions(["setBankDetails"]),

    setBankFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.setBankDetails(this.data);
    },
  },
};
</script>
