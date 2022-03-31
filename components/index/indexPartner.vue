<template>
  <div class="page container_cc index_P">
    <div v-if="allAuth.user.is_active === 0">
      <div v-if="allAuth.user.current_step < 7">
        <IndexNoComplate />
      </div>
      <div v-else>
        <IndexNoActive />
      </div>
    </div>
    <div v-else>
      <IndexPatner />
    </div>
  </div>
</template>
<script>
import IndexPatner from "./vuePartner/indexActive.vue";
import IndexNoActive from "./vuePartner/indexNoActive.vue";
import IndexNoComplate from './vuePartner/indexNoComplate.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    IndexPatner,
    IndexNoActive,
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  mounted() {},
  methods: {},
};
</script>
<style>
</style>
