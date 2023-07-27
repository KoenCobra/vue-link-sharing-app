<script setup lang="ts">
</script>

<template>
  <nav>
    <div class="navbar">
      <RouterLink to="/">
      <div class="logo">
        <img src="@/assets/images/logo-devlinks-large.svg" alt="">
      </div>
      </RouterLink>
      <div class="tabs">
        <ul>
          <li>
            <img src="@/assets/images/icon-links-header.svg" alt="icon-links-header">
            <p>Links</p>
          </li>
          <li>
            <img src="@/assets/images/icon-profile-details-header.svg" alt="icon-profile-header">
            <p>Profile Details</p>
          </li>
        </ul>
      </div>
      <RouterLink to="/preview" class="preview-btn">
        Preview
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
</style>