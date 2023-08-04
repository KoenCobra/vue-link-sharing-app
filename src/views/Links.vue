<script setup lang="ts">
import Link from '@/components/link.vue'
import { useProfileLinkStore } from '@/stores/profile-link'

const profileLinkStore = useProfileLinkStore()

function addLink() {
  profileLinkStore.addProfileLink()
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
    <div v-if="profileLinkStore.profileLinks.length" class="links">
      <Link />
    </div>
    <div v-else>
      <div class="empty-list-placeholder">
        <img src="@/assets/images/illustration-empty.svg" alt="empty" />
        <h2>Let’s get you started</h2>
        <p>
          Use the “Add new link” button to get started. Once you have more than one link, you can
          reorder and edit them. We’re here to help you share your profiles with everyone!
        </p>
      </div>
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

  @media (max-width: 600px) {
    padding: 1rem;
  }

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

  .empty-list-placeholder {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-inline: auto;
    max-width: 488px;

    img {
      margin-block: 2rem;
      margin-inline: auto;
    }

    h2 {
      color: $darkGrey;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
    }

    p {
      color: $grey;
    }
  }
}
</style>
