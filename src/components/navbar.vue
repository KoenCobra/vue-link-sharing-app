<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue";
import LogoutBtn from "@/components/buttons/logout-btn.vue";

const {isAuthenticated} = useAuth0();

</script>

<template>
  <LogoutBtn v-if="isAuthenticated"/>
</template>

<style scoped lang="scss">
</style>