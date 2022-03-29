<template>
  <div class="app">
    <v-app>
      <Menu />

      <Header />
      <div class="pages">
        <Nuxt />
      </div>
      <Footer />
      <Overlays />
    </v-app>
  </div>
</template>
<script>
import Header from "./header/header.vue";
import Footer from "./footer/footer.vue";
import Menu from "./header/menu.vue";
import { mapActions } from "vuex";
import { uuid } from "vue-uuid";
import  Overlays from '../components/overlays/overlays.vue'
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
  components: {
    Header,
    Footer,
    Menu,
    Overlays
  },

  async beforeCreate() {
    this.$vuetify.rtl = this.$i18n.locale === "ar" ? true : false;
  },

  async mounted() {
    this.$fire.messaging.onMessage((payload) => {
      this.getOrderPending();
    });

    await this.setApi(
      uuid.v5(navigator.userAgent, "65f9af5d-f23f-4065-ac85-da725569fdcd")
    );
  },
  methods: {
    ...mapActions(["getToken", "setApi", "getOrderPending"]),
  },
};
</script>

 
<style>
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400&display=swap");

.app:lang(ar) {
  direction: rtl;
}
* {
  margin: 0px;
  padding: 0px;
}
html {
  scroll-behavior: smooth;
}
body{
      overflow: hidden;
}

body,
.v-application {
  font-size: 14px;
  font-family: "Almarai", sans-serif;
  color: #444;
}
ul {
  list-style-type: none;
}
ul,
p {
  margin: 0px;
  padding: 0px;
  margin-bottom: 0px;
}
a,
.v-application a {
  color: #444;
  text-decoration: none;
}
img {
  max-width: 100%;
}
.container_cc {
  padding: 0px 100px;
}

/* body of pages */
.pages {
  margin-top: 20px;
  margin-bottom: 20px;
}
.page {
  margin-top: 70px;
  min-height: calc(100vh - 190px);
}
.page_h {
  min-height: calc(100vh - 190px);
}

.title_page {
  padding: 20px 0px;
}

.span_color {
  color: #30c88d;
}

.flex {
  display: flex;
  align-items: center;
}

/* pages style */

.tickets_add {
  position: absolute;
  bottom: 11px;
  right: 10px;
  font-size: 31px;
  background-color: #2b4a4b !important;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px !important;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.tickets_add:lang(ar) {
  right: auto;
  left: 10px;
}
/* vuetify */

.v-application p,
p {
  margin-bottom: 0px;
  font-size: inherit;
}
.v-application .success {
  background-color: #30c88d !important;
  border-color: #30c88d !important;
}
.v-application .green--text.text--darken-1 {
  color: #2c4b4c !important;
  caret-color: #43a047 !important;
  border: 1px solid #2c4b4c;
}

.v-card__actions {
  margin-top: 30px;
}
.v-application ul,
.v-application ol {
  padding: 0px;
}
.v-application .text-h5 {
  font-family: unset !important;
}
.v-application .indigo {
  background-color: #2b4a4b !important;
}
.v-card {
  padding: 10px 0px 20px 0px;
}

.v-navigation-drawer {
  position: fixed;
}
.v-otp-input {
  direction: ltr;
}

/* plugins */

.country-selector__input:lang(ar) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
input.input-tel__input:lang(ar) {
  direction: ltr;
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.input-tel__label:lang(ar) {
  right: 13px;
  left: auto;
}
.input-tel__clear:lang(ar) {
  left: 8px;
  right: auto;
}
.input-tel input,
.country-selector__label {
  font-family: "Almarai", sans-serif;
}
.country-selector__label,
.input-tel input:lang(ar) {
  text-align: right;
}
/* fa */
.fa {
  font-size: 15px;
  margin: 0px 5px;
}
@media (max-width: 1100px) {
  .container_cc {
    padding: 0px 50px;
  }
}

@media (max-width: 768px) {
  .container_cc {
    padding: 0px 20px;
  }

  .user_items {
    padding: 0px !important;
    margin: 20px 0px;
  }
}
</style>
 
