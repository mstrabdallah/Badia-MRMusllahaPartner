<template>
  <div>
    <!-- <h2>Currently available jobs</h2> -->

    <div class="noActive_body">
      <font-awesome-icon icon="circle-exclamation" />
      <p class="mb-1">
        {{ $t("Dear") }}: <span>{{ allAuth.user.name }}</span>
      </p>
      <h2>{{ $t("You must complete all the steps first") }}</h2>

      <div class="CompleteSteps">
        <NuxtLink :to="localePath('/register')">
          <v-btn class="ma-2" outlined>{{ $t("Complete The Steps") }}</v-btn>
        </NuxtLink>
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
