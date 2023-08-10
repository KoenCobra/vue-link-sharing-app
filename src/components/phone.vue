<script setup lang="ts">
import { useProfileLinkStore } from '@/stores/profile-link'
import { useUserStore } from '@/stores/user'
import draggable from 'vuedraggable'

const user = useUserStore().user
const profileLinkStore = useProfileLinkStore()
</script>

<template>
  <div class="phone">
    <img v-if="user.imgUrl" class="user-img-url" :src="user.imgUrl" alt="" />
    <p class="user-name">{{ user.firstName }} {{ user.lastName }}</p>
    <p class="user-email">{{ user.email }}</p>
    <div class="rectangles">
      <draggable v-model="profileLinkStore.profileLinks" item-key="link" :animation="300">
        <template #item="{ element: link }">
          <div
            :style="`background-color: ${link.platform?.background}`"
            class="rectangle"
            :key="link.url"
          >
            <div class="platform">
              <img :src="link.platform?.icon" :alt="link.platform?.icon" />
              <p>{{ link.platform?.platform }}</p>
            </div>
            <div>
              <img
                @click="profileLinkStore.removeProfileLink(link.id)"
                class="arrow"
                src="public/images/icon-arrow-right.svg"
                alt="arrow"
              />
            </div>
          </div>
        </template>
      </draggable>
    </div>
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
      <rect
        v-if="!user.firstName && !user.lastName"
        width="160"
        height="16"
        x="73.5"
        y="185"
        fill="#EEE"
        rx="8"
      />
      <rect v-if="!user.email" width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
      <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
      <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
      <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
      <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
      <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />
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
  align-items: center;
  position: relative;
  height: 750px;

  @media (max-width: 1100px) {
    display: none;
  }

  .user-img-url {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    object-fit: cover;
    top: 16%;
    left: 40%;
  }

  .rectangles {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    position: absolute;
    top: 45%;
    left: 26.7%;

    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(12%) hue-rotate(214deg)
        brightness(103%) contrast(100%);
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
      width: 237px;
      margin-bottom: 1.25rem;
      cursor: move;

      .arrow {
        cursor: pointer;
      }

      .platform {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
  }

  .user-name {
    position: absolute;
    top: 32%;
    width: 100%;
    text-align: center;
    color: $darkGrey;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .user-email {
    position: absolute;
    top: 36%;
    width: 100%;
    text-align: center;
    color: $grey;
    font-size: 0.875rem;
  }
}
</style>
