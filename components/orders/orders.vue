<template>
  <div class="container_cc orders_page">
    <div class="orders_page_p">
      <h1 class="title_page">My Work</h1>
      <v-card>
        <v-tabs
          color="deep-purple accent-4"
          :right="this.$i18n.locale === 'ar'"
          class="page_h"
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
        >
          <v-tab @click="changeTab('')">All</v-tab>
          <v-tab @click="changeTab('days=0')">Today</v-tab>
          <v-tab @click="changeTab('days=1')">tomorrow</v-tab>
          <v-tab @click="changeTab('days=7')">within the week</v-tab>
          <v-tab @click="changeTab('missed=1')">missed</v-tab>
          <v-tab @click="changeTab('canceled=1')">canceled</v-tab>
          <v-tab @click="changeTab('finished=1')">finished</v-tab>

          <v-tab-item v-for="n in 7" :key="n">
            <v-container fluid>
              <LoadingP v-if="allOrders.loading" />

              <v-row v-else>
                <v-col
                  cols="12"
                  md="4"
                  v-for="item in allOrders.orders.data"
                  :key="item"
                >
                  <BoxService :data="item" />
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
        <div class="text-center" v-if="!allOrders.loading">
          <v-pagination
            v-model="allOrders.orders.pagination.current_page"
            :length="allOrders.orders.pagination.total_pages"
            v-if="allOrders.orders.pagination.total_pages > 1"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            @input="changePage"
          ></v-pagination>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BoxService from "./vue/box-service.vue";
import LoadingP from "../tools/loadingP.vue";
export default {
  components: {
    BoxService,
    LoadingP,
  },

  mounted() {
    this.getOrder("days=0");
  },
  computed: {
    ...mapGetters(["allOrders"]),
  },
  data() {
    return {
      page: 1,
    };
  },

  methods: {
    ...mapActions(["getOrder"]),
    changeTab(e) {
      this.getOrder({ paramters: e });
    },
    changePage(e) {
      this.getOrder({ paramters: null, page: e });
    },
  },
};
</script>

<style scoped>
.orders_page {
  margin-top: 30px;
}
.orders_page_p {
  display: block;
  margin-top: 70px;
  position: relative;
}
</style>