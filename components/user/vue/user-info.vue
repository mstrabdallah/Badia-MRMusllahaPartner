<template>
  <div class="user_info">
    <div class="user_image">
      <font-awesome-icon icon="user" />
    </div>
    <h2 class="name">{{ allAuth.user.name }}</h2>
    <p class="email">{{ allAuth.user.email }}</p>
    <p class="phone">{{ allAuth.user.phone }}</p>

    <div class="user_pages">
      <NuxtLink :to="localePath('/my-work')">
        <v-btn>
          {{ $t("My Work") }}
        </v-btn>
      </NuxtLink>

      <NuxtLink :to="localePath('/my-earnings')">
        <v-btn>
          {{ $t("My Earnings") }}
        </v-btn>
      </NuxtLink>
    </div>
    <div class="user_logout" @click="Logout">
      <v-btn>{{ $t("Logout") }}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions(["Logout"]),
  },
};
</script>
