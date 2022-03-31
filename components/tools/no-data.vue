<template>
  <div class="noData">
    <div class="noDataImg"></div>
    <p>{{ data }}</p>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style scoped>
.noData{
    padding: 20px;
    text-align: center;
}
.noDataImg {
  background-image: url("/noData.png");
  height: 200px;
  width: 200px;
  margin: auto;
  margin-top: 100px;
  background-size: 100% 100%;
  margin-bottom: 25px;
}
.noData p{
    font-weight: bold;
}
</style>