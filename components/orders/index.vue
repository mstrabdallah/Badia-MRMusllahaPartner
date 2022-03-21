<template>
  <div class="container_cc orders_page">
    <v-card>
      <v-tabs color="deep-purple accent-4" :right="this.$i18n.locale === 'ar'">
        <v-tab>Landscape</v-tab>
        <v-tab>City</v-tab>
        <v-tab>Abstract</v-tab>

        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="item in allOrders.orders.data" :key="item" cols="12" md="4">

                  <div class="">
                      {{item.date}}
                  </div>
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),

  mounted() {
    this.getOrder();
  },
  computed: {
      ...mapGetters(["allOrders"])
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
</style>