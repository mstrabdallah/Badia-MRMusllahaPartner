<template>
  <div>
    <div class="invitef_head">
      <img src="/invitefriends.jpg" />
      <h3 style="font-size: 1rem">{{ $t("Earn by inviting friends") }}</h3>
    </div>

    <div class="form_account">
      <v-row>
        <v-col cols="12" md="10">
          <v-text-field
            :value="allAuth.user.own_referral_code"
            disabled
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-icon class="copied" @click="copyText">
            {{
              !copied ? "mdi-clipboard-outline" : "mdi-clipboard-check-outline"
            }}</v-icon
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({ onboarding: 0, copied: false }),
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.allAuth.user.own_referral_code);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.form_account {
  margin: auto;
}
.invitef_head{
    text-align: center;
    margin-bottom: 40px;}
img {
  width: 200px;
  height: 200px;
}
.v-btn:before {
  background-color: #30c88c;
}
.slide___ i {
  color: #30c88c !important;
}
.copied {
  height: 100%;
}
.v-icon.v-icon::after {
  background-color: transparent;
}
</style>
