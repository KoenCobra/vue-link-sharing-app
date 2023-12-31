﻿<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useProfileLinkStore } from '@/stores/profile-link'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import draggable from 'vuedraggable'

const toast = useToast()

const user = useUserStore().user
const profileLinkStore = useProfileLinkStore()

function copyUrlToClipboard() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      toast.add({
        severity: 'success',
        detail: 'URL copied to clipboard successfully!',
        life: 3000
      })
    })
    .catch((err) => {
      toast.add({
        severity: 'error',
        summary: 'Info',
        detail: err,
        life: 3000
      })
    })
}
</script>

<template>
  <Toast position="bottom-right" />
  <div class="preview-header-background">
    <div class="preview-header-nav">
      <RouterLink to="/links">Back to Editor</RouterLink>
      <button @click="copyUrlToClipboard" class="share-btn">Share Link</button>
    </div>
    <div class="preview-card">
      <div class="preview-card-user">
        <img v-if="user.imgUrl" class="user-img-url" :src="user.imgUrl" alt="user" />
        <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
        <p class="user-email">{{ user.email }}</p>
      </div>
      <div class="preview-card-links">
        <draggable v-model="profileLinkStore.profileLinks" item-key="link" :animation="300">
          <template #item="{ element: link }">
            <div
              :style="`background-color: ${link.platform?.background}`"
              class="rectangle"
              :key="link.url"
            >
              <a :href="link.url" target="_blank">
                <div class="platform">
                  <img :src="link.platform?.icon" :alt="link.platform?.icon" />
                  <p>{{ link.platform?.platform }}</p>
                </div>
              </a>
              <div>
                <img
                  @click="profileLinkStore.removeProfileLink(link.id)"
                  class="arrow"
                  src="/images/icon-arrow-right.svg"
                  alt="arrow"
                />
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables';

.preview-header-background {
  height: 375px;
  background-color: $purple;
  border-radius: 0 0 32px 32px;
  padding: 1.5rem;

  @media (max-width: 600px) {
    background-color: transparent;
    padding: 0;
  }

  .preview-header-nav {
    background-color: $white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-radius: 12px;

    @media (max-width: 600px) {
      background-color: transparent;
      padding: 1rem 0.5rem;
    }

    a {
      padding: 0.6875rem 1.6785rem;
      border-radius: 8px;
      border: 1px solid $purple;
      font-weight: 600;
      color: $purple;
    }

    .share-btn {
      padding: 0.6875rem 1.6785rem;
      border-radius: 8px;
      background: $purple;
      font-weight: 600;
      color: $white;
    }
  }

  .preview-card {
    background-color: transparent;
    box-shadow: none;
    padding: 1rem;
    text-align: center;
    @media (min-width: 600px) {
      width: 349px;
      padding: 48px 56px;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-inline: auto;
      margin-top: 2rem;
    }

    .preview-card-user {
      width: 100%;
      margin-bottom: 3.25rem;

      img {
        width: 104px;
        height: 104px;
        border-radius: 50%;
        border: 4px solid $purple;
        object-fit: cover;
        margin-inline: auto;
        margin-bottom: 1.5rem;

        @media (max-width: 600px) {
          width: 150px;
          height: 150px;
        }
      }

      .user-name {
        font-size: 2rem;
        color: $darkGrey;
        font-weight: 700;
      }

      .user-email {
        color: $grey;
      }
    }

    .preview-card-links {
      width: 100%;

      @media (max-width: 600px) {
        padding-inline: 2rem;
      }

      .rectangle {
        display: flex;
        border-radius: 8px;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        padding: 0.6875rem 1rem;
        gap: 0.8rem;
        color: $white;
        margin-bottom: 1.25rem;

        img {
          filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(12%)
            hue-rotate(214deg) brightness(103%) contrast(100%);
        }

        .platform {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          cursor: pointer;
        }

        .arrow {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
