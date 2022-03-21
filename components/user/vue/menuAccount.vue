<template>
  <v-sheet class="overflow-hidden menuU" style="position: relative">
    <din @click.stop="drawer = !drawer">
      <font-awesome-icon icon="user" class="fa" />
      {{ $t("My Account") }}
    </din>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      :right="this.$i18n.locale === 'en'"
    >
    <div :class="this.$i18n.locale === 'en' ? 'en':'ar'"> 
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </div>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

<style scoped>
.menuU .v-navigation-drawer:lang(en) {
direction: rtl;
}

.menuU .v-navigation-drawer:lang(ar) {
direction: ltr;
}
.menuU .v-overlay__scrim{
    background-color: rgb(33 33 33 / 0%)!important;
}
</style>