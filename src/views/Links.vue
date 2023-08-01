<script setup lang="ts">
import Link from '@/components/link.vue'
import { useProfileLinkStore } from '@/stores/profile-link'

const profileLinkStore = useProfileLinkStore()

function addLink() {
  profileLinkStore.addProfileLink(null)
}
</script>

<template>
  <div class="links-section">
    <div class="header">
      <h1>Customize your links</h1>
      <p class="subtitle">
        Add/edit/remove links below and then share all your profiles with the world!
      </p>
      <button @click="addLink" class="add-new-link-btn">+ Add new link</button>
    </div>
    <div class="links">
      <Link
        v-for="(profileLink, index) in profileLinkStore.profileLinks"
        :profileLinkIndex="index"
        :key="profileLink.url"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';
@import '@/assets/sass/variables.scss';

.links-section {
  background-color: $white;
  border-radius: 12px;
  padding: 2.5rem;

  .header {
    h1 {
      font-size: 2rem;
      color: $darkGrey;
      font-weight: 700;
    }

    .subtitle {
      font-size: 1rem;
      color: $grey;
      margin-bottom: 2.5rem;
      font-weight: 400;
    }

    .add-new-link-btn {
      padding: 0.6875rem 1.6875rem;
      text-align: center;
      border-radius: 8px;
      border: 1px solid $purple;
      color: $purple;
      width: 100%;
      @include transition;
      margin-bottom: 1.5rem;

      &:hover {
        background: $lightPurple;
      }
    }
  }

  .links {
    display: grid;
    gap: 1.5rem;
  }
}
</style>
