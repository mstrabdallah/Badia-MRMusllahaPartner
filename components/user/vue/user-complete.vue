<template>
  <div class="user_complete">
      <!-- <div class="user_complete_i">
        <div class="userci_name">category</div>
        <div class="userci_status">done</div>
      </div> -->
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
    ...mapActions([""]),
  },
};
</script>
 
 