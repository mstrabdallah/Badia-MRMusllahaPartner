<template>
    <div class="user_info">
        <div class="user_image">
            <font-awesome-icon icon="user" />
        </div>
        <h2 class="name">{{allAuth.user.name}}</h2>
        <p class="email">{{allAuth.user.email}}</p>
        <p class="phone">{{allAuth.user.phone}}</p>
    </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
 
  data: () => ({
    
  
  }),
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions([""]),
  },
};
</script>
 
 
<style scoped>
.user_info{
text-align: center;
    padding: 10px;
    border: 1px solid #e9e9e9cc;
    border-radius: 5px;
}
.user_image{
    font-size: 40px;
}
.user_info p{
        padding: 10px;
    border-bottom: 1px solid #f6f6f6;
    margin: 10px 0px;
}
</style>

