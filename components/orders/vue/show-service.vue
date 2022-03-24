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
            <v-img src="http://localhost:3000/logo.svg"></v-img>
            <h3>Continue your learning with related</h3>
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
                    <tr>
                      <td>Continue your learning with related</td>
                      <td>4</td>
                      <td>333</td>
                    </tr>
                    <tr>
                      <td>Continue your learning with related</td>
                      <td>4</td>
                      <td>333</td>
                    </tr>

                    <tr>
                      <td>Continue your learning with related</td>
                      <td>4</td>
                      <td>333</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
            <div class="sboxser_item">
              <span>
                <font-awesome-icon icon="clock" />
                <span>Time</span>
              </span>
              <span>1:00</span>
            </div>

            <div class="sboxser_item">
              <span>
                <font-awesome-icon icon="calendar-days" />
                <span>Date</span>
              </span>
              <span>18-2-2022</span>
            </div>

            <div class="sboxser_item">
              <span>
                <font-awesome-icon icon="bars" />
                <span>Sub Category</span>
              </span>
              <span>Paiement when recieving</span>
            </div>

            <div class="sboxser_payment">
              <h4>Payments details</h4>
              <div class="sboxser_item">
                <span>
                  <font-awesome-icon icon="money-check-dollar" />
                  <span>Payment method </span>
                </span>

                <span>Paiement when recieving</span>
              </div>
            </div>
          </div>
        </div>
        <v-card-actions>
          <div class="sboxser_footer">
            <v-btn color="darken-1" text @click="dialog = false"> hide </v-btn>

            <v-btn
              color="primary  darken-1"
              class="sub"
              @click="dialog = false"
            >
              Accept
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.sboxser {
  padding: 15px;
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

.sboxser_payment {
  border-top: 1px solid #f3f3f3;
  padding: 20px 0px;
  margin-top: 20px;
}

.sboxser_footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.sboxser_footer .sub {
  min-width: 250px;
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