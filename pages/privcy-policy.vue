<template>
  <v-container>
    <div class="privacy my-10 pt-8">
      <h1>{{ $t("Privacy Policy") }}</h1>
      <p>
        {{
          $t('Privacy Policy p1')
        }}
      </p>
      <p>
        {{$t('Privacy Policy p2')}}
      </p>
      <h2 class="mt-9">{{ $t("Privacy Policy H2") }}</h2>
      <h3>{{ $t("Personal Data") }}</h3>
      <p>
        {{
          $t("Privacy Policy p3")
        }}
      </p>
      <ul>
        <li>{{ $t("E-mail") }}</li>
        <li>{{ $t("Name") }}</li>
        <li>{{ $t("Phone") }}</li>
      </ul>
    </div>
  </v-container>
</template>
<script>
export default {
      head() {
    return {
      title: this.$i18n.t("Privacy Policy"),
    };
  },
};
</script>
<style scoped>
.privacy p,
.privacy h2 {
  margin: 15px 0px;
}
.privacy p {
  width: 80%;
}
.privacy p,
.privacy ul li {
  font-size: 14px;
}
.privacy ul {
  list-style: disc;
  list-style-position: inside;
}
</style>
