<script setup lang="ts">
import { useProfileLinkStore } from '@/stores/profile-link'

const profileLinkStore = useProfileLinkStore()

// a function to calculate Y position
const calculateYPosition = (index) => {
  return 278 + index * (44 + 10)
}
</script>

<template>
  <div class="phone">
    <!--    <div class="rectangle" v-for="link in profileLinkStore.profileLinks" :key="link.id">-->
    <!--      <p>{{ link.platform?.icon }}</p>-->
    <!--      <p>{{ link.platform?.platform }}</p>-->
    <!--    </div>-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="308"
      height="632"
      fill="none"
      viewBox="0 0 308 632"
    >
      <path
        stroke="#737373"
        d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
      />
      <path
        fill="#fff"
        stroke="#737373"
        d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
      />
      <circle cx="153.5" cy="112" r="48" fill="#EEE" />
      <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
      <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
      <svg
        v-for="(link, index) in profileLinkStore.profileLinks"
        :key="link.id"
        width="237"
        height="44"
        :y="calculateYPosition(index)"
      >
        <rect x="35" fill="red" rx="8" width="100%" height="100%" />
        <text x="50" y="25" fill="white">{{ link.platform?.platform }}</text>
      </svg>
      <!--      <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />-->
      <!--      <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />-->
      <!--      <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />-->
      <!--      <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />-->
      <!--      <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />-->
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables';
@import '@/assets/sass/mixins';

.phone {
  background-color: $white;
  border-radius: 12px;
  display: grid;
  justify-content: center;
  padding-block: 4rem;
  position: relative;

  .rectangle {
    position: absolute;
    left: 0;
    top: 50%;
    padding: 1rem;
    background-color: #633cff;
  }
}
</style>
