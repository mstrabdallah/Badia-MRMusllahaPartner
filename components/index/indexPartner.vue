<template>
  <div class="page container_cc index_P">
    <!-- <h2>Currently available jobs</h2> -->

    <div class="head_index">
      <h3>Currently available jobs</h3>
      <div class="head_index_1">{{ getTime() }}</div>
      <div
        class="box_active"
        :class="[allAuth.is_online === 1 ? 'online' : 'ofline']"
      >
        <v-btn elevation="2" @click="changeOnline" :loading="allAuth.loading">
          <font-awesome-icon icon="power-off" />
          <span class="box_active_t">Online</span>
        </v-btn>
      </div>
    </div>

    <div class="sec_body">
      <div class="emptyData_loding" v-if="allAuth.is_online === 1"></div>

      <div class="sec_body_items" v-if="allAuth.is_online === 1">
        <v-row>
          <v-col cols="12" md="4">
            <BoxServices />
          </v-col>
          <v-col cols="12" md="4">
            <BoxServices />
          </v-col>
          <v-col cols="12" md="4">
            <BoxServices />
          </v-col>
          <v-col cols="12" md="4">
            <BoxServices />
          </v-col>
          <v-col cols="12" md="4">
            <BoxServices />
          </v-col>
          <v-col cols="12" md="4">
            <BoxServices />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import BoxServices from "../orders/vue/box-service.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BoxServices,
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions(["changeOnline"]),
    getTime() {
      var event = new Date();
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return event.toLocaleDateString("us-en", options);
    },
  },
};
</script>
<style>
.index_P {
  padding-top: 30px;
}
.index_P h2 {
  margin-bottom: 20px;
}
.head_index {
  padding: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  border-radius: 4px;
  justify-content: space-between;
}

.box_active_t {
  padding: 0px 10px;
}
.box_active.online .v-btn {
  color: #30c88c;
}

.box_active.ofline .v-btn {
  color: #f00;
}
.sec_body {
  border: 1px solid #f5f5f5;
  min-height: 400px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.emptyData_loding {
  background: url(/icon/loadingPush.gif);
  width: 100px;
  height: 100px;
  display: block;
  background-size: 100% 100%;
  margin: auto;
}
@media (max-width: 768px) {
  .head_index {
    flex-direction: column;
    height: auto;
  }
  .head_index h3 {
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    text-align: center;
    padding: 10px 0px;
    margin-bottom: 20px;
  }
  .head_index_1,
  .box_active {
    padding-bottom: 15px;
  }
}
</style>