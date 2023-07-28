<script setup lang="ts">
import {ref} from "vue";
import type {DropdownItem} from "@/interfaces/dropdown-item";

const dropdownItems = ref<DropdownItem[]>([
  {
    icon: 'src/assets/images/icon-github.svg',
    platform: 'GitHub'
  },
  {
    icon: 'src/assets/images/icon-youtube.svg',
    platform: 'YouTube'
  },
  {
    icon: 'src/assets/images/icon-linkedin.svg',
    platform: 'LinkedIn'
  },
  {
    icon: 'src/assets/images/icon-facebook.svg',
    platform: 'Facebook'
  },
  {
    icon: 'src/assets/images/icon-frontend-mentor.svg',
    platform: 'Frontend Mentor'
  },
  {
    icon: 'src/assets/images/icon-youtube.svg',
    platform: 'YouTube'
  },
  {
    icon: 'src/assets/images/icon-codepen.svg',
    platform: 'Code Pen'
  },
  {
    icon: 'src/assets/images/icon-codewars.svg',
    platform: 'Code Wars'
  },
  {
    icon: 'src/assets/images/icon-gitlab.svg',
    platform: 'GitLab'
  },
  {
    icon: 'src/assets/images/icon-hashnode.svg',
    platform: 'HashNode'
  },
  {
    icon: 'src/assets/images/icon-stack-overflow.svg',
    platform: 'Stack Overflow'
  },
  {
    icon: 'src/assets/images/icon-twitch.svg',
    platform: 'Twitch'
  },
  {
    icon: 'src/assets/images/icon-twitter.svg',
    platform: 'twitter'
  },
])
</script>

<template>
  <div class="dropdown">
    <div class="dropdown-item" v-for="item in dropdownItems" :key="item.platform">
      <div class="dropdown-item-logo">
        <img :src="item.icon" alt="devIcon">
        <p>{{ item.platform }}</p>
      </div>
      <div class="divider"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables';

.dropdown {
  background-color: $white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid $borders;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.10);
  position: absolute;
  bottom: -590px;
  right: 0;
  left: 0;
  cursor: pointer;
  z-index: 1;

  .dropdown-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-weight: 400;
    color: $darkGrey;
    
    .dropdown-item-logo{
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .divider {
      height: 1px;
      background-color: $borders;
      width: 100%;
      margin-bottom: 0.75rem;
    }
  }
}
</style>