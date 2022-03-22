<template>
  <div class="user_items">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template  >
            <v-row no-gutters>
             General Information
            </v-row>
          </template>
        </v-expansion-panel-header>
        
        <v-expansion-panel-content>
 <ChangeInfo />
        </v-expansion-panel-content>
      </v-expansion-panel>

       <v-expansion-panel>
        <v-expansion-panel-header>
          <template  >
            <v-row no-gutters>
             Change Password 
            </v-row>
          </template>
        </v-expansion-panel-header>
        
        <v-expansion-panel-content>
 <ChangePassword />
        </v-expansion-panel-content>
      </v-expansion-panel>

 
    </v-expansion-panels>
  </div>
</template>

<script>
import ChangePassword from './forms/changePassword.vue'
import ChangeInfo from './forms/changeInfo.vue'
export default {
  data: () => ({
    date: null,
    trip: {
      name: "",
      location: null,
      start: null,
      end: null,
    },
 
  }),
  components:{
      ChangePassword,
      ChangeInfo
  }
};
</script>

<style scoped>
.user_items{
        padding: 0px 20px;
}
</style>