<template>
  <section>
    <div class="head_ps">
      <h1>filter</h1>
    </div>
    <div class="container_cc">
      <div class="services">
        <BoxServices />
      </div>
    </div>
  </section>
</template>

<script>
import BoxServices from './vue/box-services.vue'
export default {
  
 
   components: {
    BoxServices,
  },
}
</script>


<style scoped>
.head_ps {
  min-height: 300px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.services {
  width: max-content;
  margin: auto;
  margin-top: -100px;
  border-radius: 19px;
}
.crad_s {
  margin-top: 30px;
}
</style>