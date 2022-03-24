<template>
  <div class="uuid-panel">
    <h3 class="uuid">{{ result }}</h3>
  </div>
</template>

<script>
  import { uuid } from 'vue-uuid'; 
  const NAMESPACE = "65f9af5d-f23f-4065-ac85-da725569fdcd";
const change = 'Mozilla/5.1 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
  export default {
    
    data() {
      return {
        result : ''

      }
    },
 methods: {
   userAgent() {		
     console.log(navigator.userAgent)
      console.log(change)
      console.log(uuid.v5(navigator.userAgent, NAMESPACE))
      console.log(uuid.v5(change, NAMESPACE))
	 this.result = uuid.v5(navigator.userAgent, NAMESPACE); 		 
	 }
 },
 mounted() {
  this.userAgent();
   
 },
 
   
  };
</script>