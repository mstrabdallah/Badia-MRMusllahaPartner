<template>
  <div>
    <!-- <h2>Currently available jobs</h2> -->

    <div class="noActive_body">
      <div class="loadingCheckOnline">
        <div class="emptyData_loding"></div>
      </div>
  
      <h2>{{ $t("Thanks for completing all the steps") }}</h2>
<p>{{$t('indexNoActiveـp')}}</p>
      <div class="CompleteSteps">
   
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters(["allAuth"]),
  },
  mounted() {
    this.getOrderPending();
  },
  methods: {
    ...mapActions(["changeOnline", "getOrderPending"]),
    getTime() {
      var event = new Date();
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return event.toLocaleDateString(
        this.$i18n.locale === "ar" ? "ar-EG" : "us-en",
        options
      );
    },
  },
};
</script>
<style>
.CompleteSteps {
  margin-top: 30px;
}
.noActive_body {
  padding: 20px;
  min-height: 500px;
  background: rgb(250 250 250);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
}
.noActive_body svg {
  font-size: 50px;
  color: #ff8e8e;
  margin-bottom: 30px;
}
</style>
