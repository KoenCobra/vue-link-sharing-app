﻿<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import Navbar from '@/components/navbar.vue'
import Phone from '@/components/phone.vue'
const { isAuthenticated } = useAuth0()
</script>

<template>
  <div class="main">
    <template v-if="isAuthenticated">
      <Navbar />
      <div class="main-grid">
        <Phone />
        <slot />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.main {
  padding: 1.5rem;
  max-width: 1400px;
  margin-inline: auto;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }

  .main-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 32rem auto;
    gap: 2rem;

    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
