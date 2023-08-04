<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { isLoading } = useAuth0()
</script>

<template>
  <div class="loading" v-if="isLoading">loading...</div>
  <main v-else>
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </main>
</template>

<style>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
