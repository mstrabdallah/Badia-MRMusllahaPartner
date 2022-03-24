<template>
  <div class="page container_cc notif">
    <h1>Notifications</h1>
  
   <v-card
  
    max-width="700"
 
  >
    <v-list-item class="Notifications_box"  three-line v-for="item in allNotifications.notifications.data" :key="item">
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{item.date}} - {{item.time}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{item.title}}
        </v-list-item-title>
        <v-list-item-subtitle> {{item.body}}</v-list-item-subtitle>
      </v-list-item-content>

   
    </v-list-item>

 
  </v-card>

 
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
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
};
</script>
<style scoped>
.notif h1{
    margin-bottom: 20px;
}
 .Notifications_box{
       margin: 20px 0px!important;
    border-bottom: 1px solid #e4e4e4;
}
</style>