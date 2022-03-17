<template>
  <div class="uuid-panel">
    <h3 class="uuid">{{ uuid }}</h3>
  </div>
</template>

<script>
  import { uuid } from 'vue-uuid'; // uuid object is also exported to things
                                   // outside Vue instance.

  const NAMESPACE = "65f9af5d-f23f-4065-ac85-da725569fdcd";

  export default {
    data () {
      return {
        NAMESPACE,
        uuid: uuid.v5("token", NAMESPACE),
       
      };
    }
  };
</script>