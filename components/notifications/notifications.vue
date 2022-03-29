<template>
  <div class="page container_cc notif">
    <h1 class="title_page">{{ $t("Notifications") }}</h1>

    <div class="Notif_loading" v-if="allNotifications.loading"><Loading /></div>
    <div v-else>

      <div v-if="allNotifications.notifications.data.length === 0">{{ $t("You have no notifications") }}</div>

      <v-card v-else max-width="700">
        <v-list-item
          class="Notifications_box"
          three-line
          v-for="item in allNotifications.notifications.data"
          :key="item"
        >
          <v-list-item-content>
            <div class="text-overline mb-4">
              {{ item.date }} - {{ item.time }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ item.body }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Loading from '../tools/loadingP.vue'
export default {
  computed: {
    ...mapGetters(["allNotifications"]),
  },
  mounted() {
    this.getNotifications();
  },
  methods: {
    ...mapActions(["getNotifications"]),
  },
  components:{
    Loading
  }
};
</script>
<style scoped>
.notif h1 {
  margin-bottom: 20px;
}
.Notifications_box {
  margin: 20px 0px !important;
  border-bottom: 1px solid #e4e4e4;
}
</style>
