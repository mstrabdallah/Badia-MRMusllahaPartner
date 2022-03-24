<template>
  <div class="container_cc orders_page">
    <div class="orders_page_p">
      <v-card>
        <v-tabs
          color="deep-purple accent-4"
          :right="this.$i18n.locale === 'ar'"
        >
          <v-tab>Today</v-tab>
          <v-tab>tomorrow</v-tab>
          <v-tab>within the week</v-tab>

          <v-tab-item v-for="n in 3" :key="n">
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="4">
                  <BoxService />
                </v-col>

                <v-col cols="12" md="4">
                  <BoxService />
                </v-col>

                <v-col cols="12" md="4">
                  <BoxService />
                </v-col>

                <v-col cols="12" md="4">
                  <BoxService />
                </v-col>

                <v-col cols="12" md="4">
                  <BoxService />
                </v-col>

                <v-col
                  v-for="item in allOrders.orders.data"
                  :key="item"
                  cols="12"
                  md="4"
                >
                  <BoxService />
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BoxService from "./vue/box-service.vue";
export default {
  components: {
    BoxService,
  },
  data: () => ({}),

  mounted() {
    this.getOrder();
  },
  computed: {
    ...mapGetters(["allOrders"]),
  },

  methods: {
    ...mapActions(["getOrder"]),
  },
};
</script>

<style scoped>
.orders_page {
  margin-top: 30px;
}
.orders_page_p{
      display: block;
    margin-top: 70px;
    position: relative;
}
</style>