<template>
  <section  class="head bg page">
    <h2>{{$t('headH2')}}</h2>
    <p  v-html="$t('headp1')"></p>

    <div class="groups_but">
      
       <NuxtLink :to="localePath('/login')" >
      <v-btn class="ma-2" outlined >{{$t('Login')}}</v-btn>
       </NuxtLink>

       <NuxtLink :to="localePath('/register')" >
      <v-btn class="ma-2" outlined >{{$t("Create Account")}}</v-btn>
       </NuxtLink>
    </div>

    <a class="but_down" href="#mobileApp"><font-awesome-icon icon="angle-down" class="fa" /></a>

  </section>
</template>
<style scoped>
.head {
  min-height: calc(100vh - 120px);
      height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
      position: relative;
}

.bg {
  /* background-image: url(https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_2880,h_1368/https://motorarbitrage.com.au/wp-content/uploads/hero-image.jpg);   */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.head h2{
 
    margin-top: -200px;
 padding-bottom: 20px;
    color: #444;
    font-weight: 900;
    font-size: 4.5em;
}
.head p{
        text-align: center;
}
.groups_but{
    margin-top: 30px;
}

.but_down{
 position: absolute;
    bottom: 70px;
    background: #cccccc24;
    padding: 20px;
    border-radius: 50%;

}
.but_down svg{
    font-size: 20px;
}
@media(max-width:768px){
  .head h2{
        font-size: 2em;
  }
  p{
    font-size: 1em !important;
  }
}
</style>