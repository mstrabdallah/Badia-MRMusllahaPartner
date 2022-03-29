<template>
  <footer class="mt-5">
    <v-row class="my-2">
      <v-col cols="12" md="6" class="footer_info">
        <div class="img-logo">
          <a href="#">
            <img src="http://localhost:3000/logo.svg" alt="" />
          </a>
        </div>

        <p class="p1" v-html="$t('headp1')"></p>
      </v-col>
      <v-col cols="12" md="3">
        <div class="links_heading_p">
          <div class="links">
            <h2 class="links_heading">{{ $t("Other pages") }}</h2>
            <nuxt-link :to="localePath('terms-condition')">{{ $t("Terms and conditions") }}</nuxt-link>
            <nuxt-link :to="localePath('/privcy-policy')">{{ $t("Privacy Policy") }}</nuxt-link>
            <nuxt-link :to="localePath('/about')">{{ $t("About mr.musllaha") }}</nuxt-link>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="links_heading_p">
          <h2 class="links_heading">{{ $t("Quick links") }}</h2>
          <div class="links">
            <nuxt-link :to="localePath('/')" >{{ $t("Home") }}</nuxt-link>
            <nuxt-link :to="localePath('/notifications')"  v-if="allAuth.checkAuth"  >{{ $t("Notifications") }}</nuxt-link>
            <nuxt-link :to="localePath('/my-work')"  v-if="allAuth.checkAuth"  >{{ $t("My Work") }}</nuxt-link>
            <nuxt-link :to="localePath('/login')"  v-if="!allAuth.checkAuth"  >{{ $t("Login") }}</nuxt-link>
            <nuxt-link :to="localePath('/register')"  v-if="!allAuth.checkAuth" >{{ $t("Create Account") }}</nuxt-link>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="my-3 social">
      <ul>
        <li class="mx-2" v-for="icon in icons" :key="icon">
          <v-icon size="24px">{{ icon }}</v-icon>
        </li>
      </ul>
    </v-row>
    <v-divider></v-divider>

    <p class="my-2 copy">
      {{ $t("copyright") }}
    </p>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),

  computed:{
    ...mapGetters(['allAuth'])
  }
};
</script>

<style scoped>
footer {
  background: #f6f6f6;
  border-top: 1px solid #efefef;
}
footer .footer_info,
footer ul,
footer .social,
footer .copy {
  display: flex;
  justify-content: center;
  width: 100%;
}
.footer_info {
  flex-direction: column;
}
footer .img-logo {
  width: 100%;
}
footer .img-logo a {
  display: block;
  text-align: center;
}
footer .img-logo img {
  max-width: 100px;
}
footer .p1 {
  width: 60%;
  margin: 5px auto;
  text-align: center;
  font-size: 15px !important;
}
footer .links_heading {
  margin-bottom: 15px;
}
footer .links a {
  display: block;
  font-size: 14px;
  margin-top: 5px;
  transition: 0.3s all ease;
  line-height: 30px;
}
footer .links a:hover {
  color: #30c88c;
}
footer .social ul li .v-icon {
  cursor: pointer;
  transition: 0.3s all ease;
  color: #30c88c;
}
footer .social ul li .v-icon:hover {
  color: #444;
}
@media (max-width: 959px) {
  .links_heading_p {
    text-align: center;
    border: 1px solid #eaeaea;
    padding: 12px;
  }
}
</style>
