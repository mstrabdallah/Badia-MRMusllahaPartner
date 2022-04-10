<template>
  <header class="header container_cc" :class="scrolled ? 'headerFixed' : ''">
    <div class="header_p">
       <v-app-bar-nav-icon  class="menuBtn" @click.stop="showDrawer()"></v-app-bar-nav-icon>
 

      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/logo.svg" />
      </NuxtLink>

      <nav class="menu">
        <ul>
          <li class="box_op_header d-none d-sm-block">
            <NuxtLink :to="localePath('/')">
              <font-awesome-icon icon="house" class="fa" />
              <span class="navM_">{{ $t("Home") }}</span>
            </NuxtLink>
          </li>

          <li v-if="allAuth.checkAuth">
            <NuxtLink :to="localePath('/notifications')">
              <font-awesome-icon icon="bell" class="fa" />
              <span class="navM_">{{ $t("Notifications") }}</span>
            </NuxtLink>
          </li>

          <li v-if="allAuth.checkAuth">
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <font-awesome-icon icon="user" class="fa" />
                  <span class="navM_">{{ $t("My Account") }}</span>
                </div>
              </template>

              <v-list>
                <NuxtLink :to="localePath('/account')">
                  <v-list-item link>
                    <v-list-item-title>
                      {{ $t("My Account") }}
                    </v-list-item-title>
                  </v-list-item>
                </NuxtLink>

                <NuxtLink :to="localePath('/my-work')">
                  <v-list-item link>
                    <v-list-item-title>
                      {{ $t("My Work") }}
                    </v-list-item-title>
                  </v-list-item>
                </NuxtLink>

                <NuxtLink :to="localePath('/my-earnings')">
                  <v-list-item link>
                    <v-list-item-title>
                      {{ $t("My Earnings") }}
                    </v-list-item-title>
                  </v-list-item>
                </NuxtLink>

                <v-list-item link @click="Logout">
                  <div>
                    <v-list-item-title>{{ $t("Logout") }}</v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu>
          </li>

          <li v-if="!allAuth.checkAuth" class="d-none d-sm-block">
            <NuxtLink class="login_" :to="localePath('/login')">
              <font-awesome-icon
                style="padding: 0; margin: 0px 5px"
                icon="right-to-bracket"
              />
              {{ $t("Login") }}
            </NuxtLink>
          </li>

          <li class="box_op_header">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div v-if="$i18n.locale === 'ar'" class="flex">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    width="24px"
                    src="/saflag.png"
                  />
                </div>
                <div class="flex" v-else>
                  <img
                    v-bind="attrs"
                    v-on="on"
                    width="24px"
                    src="/usflag.png"
                  />
                </div>
              </template>
              <v-list>
                <v-list-item :disabled="this.$i18n.locale === 'ar'">
                  <a @click="changeLanguage('ar')">
                    <img width="24px" src="/saflag.png" />
                  </a>
                </v-list-item>
                <v-list-item>
                  <a @click="changeLanguage('en')">
                    <img width="24px" src="/usflag.png" />
                  </a>
                </v-list-item>
              </v-list>
            </v-menu>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Menu from "./menu.vue";
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
    ...mapActions(["Logout", "changeLanguage", "changeMenuHeader"]),
    handleClick(index) {
      this.items[index].click.call(this);
    },
    showDrawer() {
      this.changeMenuHeader(true);
    },

    handleScroll() {
      if (window.scrollY < 20) {
        this.scrolled = false;
      } else {
        this.scrolled = true;
      }
    },
  },
  components: {
    Menu,
  },
};
</script>

<style scoped>
header {
  box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
  border: 1px solid #efefef;
  z-index: 3;
  background: #fff;
  width: 100%;
  position: fixed;
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
  height: 70px;
  transition: 1s;
}
.headerFixed .header_p {
  height: 60px;
}
.header_p li a.nuxt-link-exact-active {
  color: #30c88c;
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
  font-size: 14px;
  align-items: center;
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
  height: 40px;
  align-items: center;
  display: flex;
}
.menuBtn{
  padding: 0px!important;
  min-width: max-content!important;
}
.menuBtn:lang(en){
  margin-right: 15px;

}
.menuBtn:lang(ar){
  margin-left: 15px;
}
.menuBtn i {
  font-size: 30px;
  color: #444!important;;

}


.select_head {
  height: 40px;
  border-radius: 6px;
  max-width: 190px;
}

.theme--light.v-list-item--disabled {
  color: rgba(0, 0, 0, 0.38);
  background: #30c88c;
  color: #fff;
}

@media (max-width: 768px) {
  .menu {
  }
  .menu ul {
    justify-content: end;
  }
  .box_op_header {
  }

  .emptyData_loding {
    width: 100%;
  }

  .navM_ {
    display: none;
  }
}
</style>
