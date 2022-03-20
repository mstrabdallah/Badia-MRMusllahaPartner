<template>
  <div class="uuid-panel">
    <h3 class="uuid">{{ id }}</h3>
    <p>{{uuid}}</p>
 
  </div>
</template>

<script>
  import { uuid } from 'vue-uuid'; 

  export default {
    data() {
      return {
        uuid: uuid.v1(),
       

      }
    },
 methods: {
   
 }
 
   
  };
</script>