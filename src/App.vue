<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue";
import {useDropdownStore} from "@/stores/dropdown";

const {isLoading} = useAuth0()

function closeDropdown() {
  if (useDropdownStore().isDropdownVisible) {
    useDropdownStore().closeDropdown()
  }
}
</script>

<template>
  <div v-if="isLoading">
    loading...
  </div>
  <main @click="closeDropdown" v-else>
    <component :is="$route.meta.layout || 'div'">
      <RouterView/>
    </component>
  </main>
</template>

<style>

</style>
