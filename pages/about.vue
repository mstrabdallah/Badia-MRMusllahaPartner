<template>
  <v-container class="my-10 pt-8">
    <h1 class="about_heading">{{ $t("About MR.Musllaha") }}</h1>
    <v-row>
      <v-col cols="12">
        <p>{{$t("About p1")}}</p>
        <h2 class="my-5">{{ $t("What We Do") }}</h2>
        <p>{{$t("About p2")}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    head() {
    return {
      title: this.$i18n.t("About MR.Musllaha"),
    };
  },
};
</script>

<style scoped>
.about_heading {
  margin: 10px 0px 30px;
}
p {
  width: 70%;
  font-size: 14px !important;
  line-height: 1.7;
}
</style>
