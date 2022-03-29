<template>
  <div>
    <div class="boxser">
      <div class="boxser_img">
        <v-img :src="data.category.image"></v-img>
        <h3>{{ data.category.name }}</h3>
      </div>

      <div class="boxser_body">
        <div class="boxser_table">
          <v-simple-table fixed-header height="240px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>{{ $t("Services") }}</th>
                  <th>{{ $t("Quantity") }}</th>
                  <th>{{ $t("price") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data.services.data" :key="item">
                  <td>{{ item.service.title }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <div class="boxser_item_">
          <div class="boxser_item1_">
            <font-awesome-icon icon="recycle" />
            <div>{{ $t("Status") }}</div>
          </div>
          <span>{{ $t("statusOrder" + data.status) }}</span>
        </div>

        <!-- <div class="boxser_item">
        <font-awesome-icon icon="clock" />
        <span>1:00</span>
      </div>

      <div class="boxser_item">
        <font-awesome-icon icon="calendar-days" />
        <span>18-2-2022</span>
      </div>

      <div class="boxser_item">
        <font-awesome-icon icon="bars" />
        <span>Continue your learning </span>
      </div> -->
      </div>

      <div class="boxser_footer">
        <ShowService :data="data" />
      </div>
    </div>
    <Msg />
  </div>
</template>
<script>
import ShowService from "./show-service.vue";
import Msg from "../tools/msg.vue";
export default {
  components: {
    ShowService,
    Msg,
  },
  props: ["data"],
};
</script>
<style>
.boxser {
  width: 350px;
  margin: 20px;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ece9e9;
  transition: 0ms;
}
.boxser:hover {
  box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
  transform: translateY(-4px);
  transition: 0ms;
}
.boxser_img {
  border-bottom: 1px solid #f8f8f8;
  padding-bottom: 12px;
  margin-bottom: 10px;
}

.boxser .v-image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: auto;
  border: 1px solid #efefef;
}
.boxser h3 {
  text-align: center;
  margin: 10px 0px;
  font-size: 14px;
}

.boxser_table {
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
  margin-bottom: 15px;
}

.boxser_item_ {
  display: flex;
  justify-content: space-between;
}
.boxser_item1_ {
  display: flex;
  align-items: center;
  font-weight: bold;
}
.boxser_item1_ div {
  padding: 0px 7px;
}

.boxser_item {
  padding: 10px 0px;
  color: #444;
}
.boxser_item span {
  padding: 0px 10px;
  font-weight: bold;
}
</style>
