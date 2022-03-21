<template>
  <header class="header container_cc" :class="scrolled ? 'headerFixed' : ''">
    <div class="header_p">
      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/logo.svg" />
      </NuxtLink>
      <!-- 
      <div class="mob">
        <div class="searchMobile">
          <font-awesome-icon icon="magnifying-glass" />
        </div>
      </div>

      <div class="search">
        <input type="text" placeholder="Search For Services" />

        <v-select
          class="select_head"
          :items="items"
          label="Location"
          outlined
          dense
          prepend-inner-icon="mdi-map-marker"
        ></v-select>
      </div> -->

      <nav class="menu">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')">
              <font-awesome-icon icon="house" class="fa" />
              {{ $t("Home") }}
            </NuxtLink>
          </li>

          <li v-if="allAuth.checkAuth">
            <NuxtLink :to="localePath('/tickets')">
                 <font-awesome-icon icon="bell" class="fa" />
              {{ $t("Notifications") }}
            </NuxtLink>
          </li>

          <li v-if="!allAuth.checkAuth">
            <NuxtLink :to="localePath('/Categories')">{{
              $t("Categories")
            }}</NuxtLink>
          </li>

          <li v-if="!allAuth.checkAuth">
            <NuxtLink :to="localePath('/about')">{{ $t("About") }}</NuxtLink>
          </li>
          <li v-if="allAuth.checkAuth">
            <MenuAccount />
          </li>

          <li v-if="!allAuth.checkAuth">
            <NuxtLink class="login_" :to="localePath('/login')">{{
              $t("Login")
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="mob_nav">
        <Menu />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./menu.vue";
import MenuAccount from "../../components/user/vue/menuAccount.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    scrolled: false,
  }),

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },

  methods: {
    ...mapActions(["Logout"]),
    handleClick(index) {
      this.items[index].click.call(this);
    },

    handleScroll() {
      if (window.scrollY < 41) {
        this.scrolled = false;
      } else {
        this.scrolled = true;
      }
    },
  },
  components: {
    Menu,
    MenuAccount,
  },
};
</script>


<style scoped>
header {
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 5%);
  z-index: 99;
  background: #fff;
  position: absolute;
  top: 41px;
  width: 100%;
}
.headerFixed {
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0px;
}

.header_p {
  display: flex;
  align-items: center;
  height: 80px;
}
.headerFixed .header_p {
  height: 60px;
  transition: 1s;
}
.header_p li a.nuxt-link-exact-active {
  color: #30c88c;
  padding-bottom: 10px;
}

a.nuxt-link-exact-active.login_ {
  border: 1px solid #30c88c;
}
.login_ {
  border: 1px solid #ccc;
  padding: 7px 30px;
  border-radius: 5px;
}
.menu {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

.menu ul {
  font-size: 16px;
  display: flex;
}
.menu ul li:lang(en) {
  margin-left: 5em;
}

.menu ul li:lang(ar) {
  margin-right: 5em;
}

.menu ul li a:hover {
  color: #30c88c;
}

.logo img {
  min-width: 47px;
  height: 50px;
  align-items: center;
  display: flex;
}
.search {
  display: flex;
  align-items: center;
}
.search:lang(en) {
  margin-left: 30px;
}
.search:lang(ar) {
  margin-right: 30px;
}
.select_head {
  margin: 0px 3px;
}

.search input {
  border: 1px solid #9e9e9e;
  padding: 9px 20px;
  border-radius: 8px;
  width: 300px;
  margin: 0px;
}

.select_head {
  height: 40px;
  border-radius: 6px;
  max-width: 190px;
}
.mob_nav {
  display: none;
  font-size: 20px;
  color: #30c88c;
}
.theme--light.v-list-item--disabled {
  color: rgba(0, 0, 0, 0.38);
  background: #30c88c;
  color: #fff;
}

.searchMobile {
  background: #f5f5f5;
  padding: 10px 17px;
  border-radius: 4px;
  color: #444;
  cursor: pointer;
}
 
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .search {
    display: none;
  }
  .mob_nav {
    display: block;
  }
  .menu ul {
    display: none;
  }
}
</style>