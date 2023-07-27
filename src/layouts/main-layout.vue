<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue";
import Navbar from "@/components/navbar.vue";

const {isLoading, isAuthenticated} = useAuth0()
</script>

<template>

  <div>
    <template v-if="isAuthenticated">
      <Navbar/>
      <slot/>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>