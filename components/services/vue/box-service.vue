<template>
  <div class="boxser">
    <div class="boxser_img">
      <v-img src="http://localhost:3000/logo.svg"></v-img>
      <h3>Continue your learning with related</h3>
    </div>

    <div class="boxser_body">
        
      <div class="boxser_table">
        <v-simple-table fixed-header height="240px">
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
      <div class="boxser_item">
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
      </div>
    </div>

    <div class="boxser_footer">
      <ShowService />
    </div>
  </div>
</template>
<script>
import ShowService from "./show-service.vue";
export default {
  components: {
    ShowService,
  },
};
</script>
<style >
.boxser {
  width: 350px;
  margin: 20px;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ece9e9;
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

.boxser_item {
  padding: 10px 0px;
  color: #444;
}
.boxser_item span {
  padding: 0px 10px;
  font-weight: bold;
}

</style>