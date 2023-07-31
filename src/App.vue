<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue";

const {isLoading} = useAuth0()

</script>

<template>
  <div v-if="isLoading">
    loading...
  </div>
  <main v-else>
    <component :is="$route.meta.layout || 'div'">
      <RouterView/>
    </component>
  </main>
</template>

<style>

</style>
