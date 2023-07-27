<script setup lang="ts">
import Navbar from "@/components/navbar.vue";
import {useAuth0} from "@auth0/auth0-vue";

const {isLoading, isAuthenticated} = useAuth0()

</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <template v-if="isAuthenticated">
      <Navbar/>
      <RouterView/>
    </template>
  </div>
</template>

<style scoped lang="scss">
</style>
