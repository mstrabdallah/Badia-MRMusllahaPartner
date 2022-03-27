<template>
<div class="loadingP">
    <v-progress-circular
    :size="50"
    color="primary"
    indeterminate
  ></v-progress-circular>
</div>
</template>
<style>
.loadingP{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height:350px;
}
</style>