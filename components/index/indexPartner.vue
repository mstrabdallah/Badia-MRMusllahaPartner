<template>
  <div class="page container_cc index_P">
    <!-- <h2>Currently available jobs</h2> -->

    <div class="head_index">
      <h3>Currently available jobs</h3>
      <div class="head_index_1"> {{getTime()}}</div>
      <div class="box_active online">
        <v-btn elevation="2">
          <font-awesome-icon icon="power-off" />
          <span class="box_active_t">Online</span>
        </v-btn>
      </div>
    </div>

    <div class="sec_body">
      <BoxServices />
      <div class="emptyData_loding"></div>
    </div>
  </div>
</template>
<script>
import BoxServices from "../services/vue/box-service.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BoxServices,
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },

  methods: {
    getTime() {
      var event = new Date();
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return event.toLocaleDateString('us-en', options)
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
  background: #f5f5f5;
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

.emptyData_loding {
  background: url(https://flevix.com/wp-content/uploads/2020/06/Square-Loading.gif);
  width: 400px;
  height: 400px;
  display: block;
  background-size: 100% 100%;
  margin: auto;
}
</style>