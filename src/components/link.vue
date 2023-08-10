<script setup lang="ts">
import { ref } from 'vue'
import { useProfileLinkStore } from '@/stores/profile-link'
import type { DropdownItem } from '@/interfaces/dropdown-item'
import Dropdown from 'primevue/dropdown'

const profileLinkStore = useProfileLinkStore()
let placeholder: string = ''
const dropdownItems = ref<DropdownItem[]>([
  {
    icon: 'public/images/icon-github.svg',
    platform: 'GitHub',
    background: '#1A1A1A'
  },
  {
    icon: 'public/images/icon-youtube.svg',
    platform: 'YouTube',
    background: '#EE3939'
  },
  {
    icon: 'public/images/icon-linkedin.svg',
    platform: 'LinkedIn',
    background: '#2D68FF'
  },
  {
    icon: 'public/images/icon-facebook.svg',
    platform: 'Facebook',
    background: '#4867AA'
  },
  {
    icon: 'public/images/icon-frontend-mentor.svg',
    platform: 'Frontend Mentor',
    background: '#67BECE'
  },
  {
    icon: 'public/images/icon-codepen.svg',
    platform: 'Code Pen',
    background: '#000'
  },
  {
    icon: 'public/images/icon-codewars.svg',
    platform: 'Code Wars',
    background: '#B1361E'
  },
  {
    icon: 'public/images/icon-gitlab.svg',
    platform: 'GitLab',
    background: '#DA4127'
  },
  {
    icon: 'public/images/icon-hashnode.svg',
    platform: 'HashNode',
    background: '#2962FF'
  },
  {
    icon: 'public/images/icon-stack-overflow.svg',
    platform: 'Stack Overflow',
    background: '#EC7C20'
  },
  {
    icon: 'public/images/icon-twitch.svg',
    platform: 'Twitch',
    background: '#8B44F7'
  },
  {
    icon: 'public/images/icon-twitter.svg',
    platform: 'twitter',
    background: '#1D9BF0'
  }
])

function setPlaceholder(event: any) {
  placeholder = `e.g. https://www.${event.value.platform
    .toLowerCase()
    .replace(/\s/g, '')}com/benwright`
}
</script>

<template>
  <div
    class="link"
    v-for="(profileLink, index) in profileLinkStore.profileLinks"
    :key="profileLink.id"
  >
    <div class="link-header">
      <div class="link-number">
        <p>Link #{{ index + 1 }}</p>
      </div>
      <button @click="profileLinkStore.removeProfileLink(profileLink.id)" class="remove-btn">
        Remove
      </button>
    </div>
    <form>
      <div class="inputs">
        <div class="input-field platform">
          <label>Platform</label>
          <div class="input-icons">
            <Dropdown
              @change="setPlaceholder"
              v-model="profileLink.platform"
              :options="dropdownItems"
              optionLabel="platform"
              placeholder="Select a platform"
              class="dropdown"
            >
              <template>
                <div class="dropdown-value">
                  <img alt="" :src="profileLink.platform?.icon" />
                  <div>{{ profileLink.platform?.platform }}</div>
                </div>
              </template>
              <template #option="slotProps">
                <div style="display: flex; gap: 0.5rem">
                  <img :alt="slotProps.option.icon" :src="slotProps.option.icon" />
                  <div>{{ slotProps.option.platform }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
        <div class="input-field">
          <label>Link</label>
          <div class="input-icons">
            <img class="link-icon" src="@/assets/images/icon-link.svg" alt="" />
            <input
              v-model="profileLink.url"
              type="text"
              name="url"
              :placeholder="profileLink.platform?.platform ? placeholder : ''"
            />
          </div>
        </div>
        <p
          class="error"
          v-if="
            profileLink.platform?.platform &&
            !profileLink.url
              ?.toLowerCase()
              .replace(/\s/g, '')
              .includes(profileLink.platform?.platform?.toLowerCase().replace(/\s/g, ''))
          "
        >
          *Make sure your URL contains: {{ profileLink.platform?.platform }}
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables';
@import '@/assets/sass/mixins';
@import '@/assets/sass/input';

.link {
  padding: 1.25rem;
  background-color: $lightGrey;
  border-radius: 12px;

  .link-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    .link-number {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      p {
        color: $grey;
        font-weight: 700;
      }
    }

    .remove-btn {
      font-weight: 400;
      color: $grey;
    }
  }
}

.error {
  color: $grey;
  font-size: 0.75rem;
  text-align: right;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
