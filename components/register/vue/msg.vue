<template>
<div>
<div v-if="Array.isArray(allAuth.errors)">
   <div class="reg_msg" v-if="allAuth.errors.length > 0">
    <div class="msgerror" v-for="item in allAuth.errors" :key="item">
      <p>{{ $t(item) }}</p>
    </div>
  </div>
</div>

<div v-else>
    <div class="msgerror">
      <p>{{ $t(allAuth.errors) }}</p>
</div>
 </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allAuth"]),
  },
};
</script>
 
