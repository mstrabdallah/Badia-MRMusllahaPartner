<template>
  <div class="page container_cc">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <UserInfo />
        </v-col>

        <v-col cols="12" md="8">
          <UserItem />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import UserInfo from "./vue/user-info.vue";
import UserItem from "./vue/user-items.vue";
export default {
  head() {
    return {
      title: this.$i18n.t("Account-page"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "todos description",
          name: "todos description",
          content: "todos My custom description",
        },
      ],
    };
  },
  data: () => ({
    loading: false,
    data: {
      phone_number: "",
      password: "",
    },
  }),
  components: {
    UserInfo,
    UserItem,
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions([""]),
  },
};
</script>
 


<style>
.msgerror{
      color: #f00;
    border: 1px solid #f00;
    padding: 10px;
    margin: 10px 0px;
    border-radius: 4px;
}
.msgdone{
      color: #30c88c;
    border: 1px solid #30c88c;
    padding: 10px;
    margin: 10px 0px;
    border-radius: 4px;
}
.form_account{
  max-width: 500px;
}
.form_account_body{
      background: #fcfcfc;
    padding: 10px;
    border: 1px solid #f5f4f4;
    border-radius: 4px;
}
</style>