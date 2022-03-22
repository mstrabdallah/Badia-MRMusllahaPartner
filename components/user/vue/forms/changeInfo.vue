<template>
  <div class="form_account">
    <h3 class="mb-5">
      {{ $t("Your General Information") }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="changeInfoFunction"
        v-model="valid"
        lazy-validation
      >
        <div class="form_account_body">
          <v-text-field
            v-model="data.name"
            :counter="200"
            :label="$t('Name')"
            :rules="[rules.required]"
            required
            outlined
            dense
          ></v-text-field>
 

          <v-text-field
            v-model="data.email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
            outlined
            dense
          ></v-text-field>
 
     
        <div :class="[allUsers.msgInfoDone ? 'msgdone':'msgerror']" v-if="allUsers.msgInfo !=null">
            {{ allUsers.msgInfo }}
          </div>

        <v-btn
          :disabled="!valid"
          color="success"
          class="sub"
          @click="changeInfoFunction"
          :loading="allUsers.loading"
        >
          {{ $t("save") }}
        </v-btn>
        </div>
      </v-form> 
    </div>
  </div>
</template>


<script>
import { mapActions,mapGetters } from "vuex";

export default {
  data: () => ({
    valid: false,
    data: {
      name: '',
      email: "",
    },
    msg: "",
    msgStatus: true,
    rules: {
      required: (v) => !!v || "Required.",
      email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
  }),
  computed: {
      ...mapGetters(["allAuth","allUsers"]),
    
  },
  mounted() {
    this.complateData()
  },
  methods: {
    complateData(){
      this.data.name=this.allAuth.user.name
      this.data.email=this.allAuth.user.email
    },
    ...mapActions(["changeInfo"]),

    changeInfoFunction(e) {
      e.preventDefault();
      if (this.$refs.form.validate() === false) return false;
      this.changeInfo(this.data);
    },
  },
};
</script>
 
