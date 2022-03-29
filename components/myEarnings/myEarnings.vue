<template>
  <div class="page container_cc">
    <div class="Earnings"></div>
      <h1 class="">{{ $t("MY Earnings") }}</h1>
      <v-containe no-gutters>
        <v-row gutters="5">
          <v-col cols="12" md="6">
            <div class="myearning_item today">
              <div class="myearning_ch">
                <span>{{ $t("MY Earnings Today") }}</span>
                <p>{{ allEarnings.earnings.today }}</p>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="myearning_item">
              <div class="myearning_ch">
                <span>{{ $t("My Total Earnings") }}</span>
                <p>{{ allEarnings.earnings.total }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-containe>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allEarnings"]),
  },
  mounted() {
    this.getMyEarnings();
  },
  methods: {
    ...mapActions(["getMyEarnings"]),
  },
};
</script>
<style scoped>
<<<<<<< HEAD
.Earnings{
  margin-top: 120px;
}
h1 {
    text-align: center;
    border-bottom: 1px solid #f6f6f6;
    padding-bottom: 16px;
    margin-bottom: 20px;
}
.myearning_item{
background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
 
    border-radius: 4px;
    text-align: center;
}
.myearning_item.today{
        background: #fff;
    border: 1px solid #f2f2f2;
}
.myearning_item span{
        font-size: 18px;
    font-weight: bold;
}
</style>
=======
.Earnings {
  margin-top: 120px;
}
h1 {
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 16px;
  margin-bottom: 20px;
}
.myearning_item {
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  border-radius: 4px;
  text-align: center;
}
.myearning_item.today {
  background: #fff;
  border: 1px solid #f2f2f2;
}
.myearning_item span {
  font-size: 18px;
  font-weight: bold;
}
</style>
>>>>>>> f572e1f (update)
