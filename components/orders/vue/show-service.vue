<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined class="MoreDetails" v-on="on" v-bind="attrs">
          More Details
        </v-btn>
      </template>
      <v-card>
        <div class="sboxser">
          <div class="sboxser_img">
            <v-img :src="data.category.image"></v-img>
            <h3>{{ data.category.name }}</h3>
          </div>

          <div class="sboxser_body">
            <h4>Service details</h4>
            <div class="sboxser_table">
              <v-simple-table fixed-header max-height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>services</th>
                      <th>Quantity</th>
                      <th>price</th>
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

            <div class="sboxser_payment">
              <h4>Payments details</h4>

              <div class="sboxser_item">
                <span>
                  <font-awesome-icon icon="money-check-dollar" />
                  <span>Total Price</span>
                </span>

                <span>{{ data.total_price }}</span>
              </div>

              <div class="sboxser_item">
                <span>
                  <font-awesome-icon icon="hand-holding-dollar" />

                  <span>Payment method </span>
                </span>

                <span>{{ data.payment_method }}</span>
              </div>
            </div>

            <div class="sboxser_user">
              <h4>User Info</h4>
              <div class="sboxser_item">
                <span class="sboxser_useri">
                  <v-img
                    :src="data.customer.image"
                    v-if="data.customer.image != null"
                  ></v-img>
                  <font-awesome-icon
                    icon="user"
                    v-if="data.customer.image === null"
                  />
                  <span>{{ data.customer.name }}</span>
                </span>
              </div>
              <div class="sboxser_item">
                <span>
                  <font-awesome-icon icon="money-check-dollar" />
                  <span>Phone</span>
                </span>

                <span>{{ data.customer.phone }}</span>
              </div>
            </div>

            <div class="sboxser_info">
              <div class="sboxser_item">
                <span>
                  <font-awesome-icon icon="clock" />
                  <span>Time</span>
                </span>
                <span>{{ data.time }}</span>
              </div>

              <div class="sboxser_item">
                <span>
                  <font-awesome-icon icon="calendar-days" />
                  <span>Date</span>
                </span>
                <span>{{ data.date }}</span>
              </div>

              <div class="sboxser_item">
                <span>
                  <font-awesome-icon icon="calendar-days" />
                  <span>status</span>
                </span>
                 <span>{{$t('statusOrder'+data.status)}}</span>
              </div>
            </div>
          </div>
        </div>
        <v-card-actions>
          <div class="sboxser_footer">
            <v-btn color="darken-1" text @click="dialog = false"> hide </v-btn>

            <v-btn
              color="red darken-1"
              class="sub"
              @click="cancelOrder(data.id)"
              :loading="allOrders.loadingAc"
              :disabled="allOrders.loadingAc"
              v-if="data.status > 0 && data.status <= 4"
            >
              Cancel
            </v-btn>

            <v-btn
              color="primary  darken-1"
              class="sub"
              @click="acceptOrderFunction(data.id)"
              :loading="allOrders.loadingA"
              :disabled="allOrders.loadingA"
              v-if="data.status === 0"
            >
              Accept
            </v-btn>

            <v-btn
              color="primary  darken-1"
              class="sub"
              @click="rescheduleOrder(data.id)"
              :loading="allOrders.loadingA"
              :disabled="allOrders.loadingA"
              v-if="data.status === 1"
            >
              ReSchedule
            </v-btn>

            <v-btn
              color="primary  darken-1"
              class="sub"
              @click="inWayOrder(data.id)"
              :loading="allOrders.loadingA2"
              :disabled="allOrders.loadingA2"
              v-if="data.status === 1 || data.status === 4"
            >
              In Way
            </v-btn>

            <v-btn
              color="primary  darken-1"
              class="sub"
              @click="startOrder(data.id)"
              :loading="allOrders.loadingA"
              :disabled="allOrders.loadingA"
              v-if="data.status === 2"
            >
              Start Work
            </v-btn>

            <v-btn
              color="primary  darken-1"
              class="sub"
              @click="completeOrder(data.id)"
              :loading="allOrders.loadingA2"
              :disabled="allOrders.loadingA2"
              v-if="data.status === 3"
            >
              Complete
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ["data"],

  mounted() {},
  computed: {
    ...mapGetters(["allOrders"]),
  },

  methods: {
    ...mapActions(["acceptOrder","inWayOrder","startOrder","completeOrder","rescheduleOrder","cancelOrder"]),
    acceptOrderFunction(e) {
      this.acceptOrder(e);
    },
  },
};
</script>

<style scoped>
.sboxser {
  padding: 15px;
}
.sboxser_useri {
  align-items: center;
  display: flex;
}
.sboxser_useri svg{
  font-size: 18px;

}

.sboxser_img {
  border-bottom: 1px solid #f8f8f8;
  padding-bottom: 12px;
  margin-bottom: 10px;
}

.sboxser .v-image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: auto;
  border: 1px solid #efefef;
}

.sboxser_useri .v-image {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.sboxser h3 {
  text-align: center;
  margin: 10px 0px;
  font-size: 14px;
}

.sboxser_table {
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
  margin-bottom: 15px;
}

.sboxser_item {
  padding: 10px 0px;
  color: #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sboxser_item span {
  padding: 0px 10px;
}

.sboxser_payment,
.sboxser_user,
.sboxser_info {
  border-top: 1px solid #f3f3f3;
  padding: 20px 0px;
  margin-top: 20px;
}

.sboxser_footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #e4e4e4;
  padding-top: 20px;
}

.sboxser_footer .sub {
}

button.MoreDetails {
  width: 100%;
  margin-top: 15px;
  height: 36px;
  padding: 0 16px;
  margin-top: 15px;
  border: 1px solid #30c88c;
}
</style>