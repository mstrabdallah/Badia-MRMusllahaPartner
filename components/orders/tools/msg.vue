<template>
  <div class="text-center">
    <v-snackbar
       
       
      color="success"
      outlined
       
      v-model="allOrders.msgStatus"
      :multi-line="multiLine"
    >
      {{ allOrders.msg }}

    </v-snackbar>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    multiLine: true,
  }),
  computed: {
    ...mapGetters(["allOrders"]),
  },
  methods: {
    ...mapActions([""]),
  },
};
</script>

<style scoped>
.v-snack__wrapper{
    width: 100%;
}
</style>