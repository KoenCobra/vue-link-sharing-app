<script setup lang="ts">
import * as Yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { ref } from 'vue'
import { useProfileLinkStore } from '@/stores/profile-link'
import type { DropdownItem } from '@/interfaces/dropdown-item'
import Dropdown from 'primevue/dropdown'

const profileLinkStore = useProfileLinkStore()
let placeholder: string = ''
const dropdownItems = ref<DropdownItem[]>([
  {
    icon: 'src/assets/images/icon-github.svg',
    platform: 'GitHub',
    background: '#1A1A1A'
  },
  {
    icon: 'src/assets/images/icon-youtube.svg',
    platform: 'YouTube',
    background: '#EE3939'
  },
  {
    icon: 'src/assets/images/icon-linkedin.svg',
    platform: 'LinkedIn',
    background: '#2D68FF'
  },
  {
    icon: 'src/assets/images/icon-facebook.svg',
    platform: 'Facebook',
    background: '#4867AA'
  },
  {
    icon: 'src/assets/images/icon-frontend-mentor.svg',
    platform: 'Frontend Mentor',
    background: '#67BECE'
  },
  {
    icon: 'src/assets/images/icon-codepen.svg',
    platform: 'Code Pen',
    background: '#000'
  },
  {
    icon: 'src/assets/images/icon-codewars.svg',
    platform: 'Code Wars',
    background: '#B1361E'
  },
  {
    icon: 'src/assets/images/icon-gitlab.svg',
    platform: 'GitLab',
    background: '#DA4127'
  },
  {
    icon: 'src/assets/images/icon-hashnode.svg',
    platform: 'HashNode',
    background: '#2962FF'
  },
  {
    icon: 'src/assets/images/icon-stack-overflow.svg',
    platform: 'Stack Overflow',
    background: '#EC7C20'
  },
  {
    icon: 'src/assets/images/icon-twitch.svg',
    platform: 'Twitch',
    background: '#8B44F7'
  },
  {
    icon: 'src/assets/images/icon-twitter.svg',
    platform: 'twitter',
    background: '#1D9BF0'
  }
])
const props = defineProps({
  profileLinkId: Number
})

const { handleSubmit } = useForm()
const { value: dropdownValue, errorMessage: dropError } = useField('value', validateDropdownField)
const { value: urlValue, errorMessage: urlError } = useField('url', validateTextField)

function validateDropdownField(value) {
  if (!value) {
    return 'Platform is required.'
  }
  return true
}

async function validateTextField(value) {
  const urlSchema = Yup.string()
    .required("Can't be empty")
    .url('Must be a valid URL')
    .test(
      'contains-platform',
      `URL must contain ${dropdownValue.value?.platform.toLowerCase().replace(/\s/g, '')}`,
      (value) =>
        value &&
        value
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(dropdownValue.value?.platform.toLowerCase().replace(/\s/g, ''))
    )

  try {
    await urlSchema.validate(value)
    return true
  } catch (error) {
    return error.message
  }
}

const onSubmit = handleSubmit((values) => {
  profileLinkStore.updateProfileLink(
    {
      platform: values.value,
      url: values.url
    },
    props.profileLinkId
  )
})

function setPlaceholder(event) {
  placeholder = `e.g. https://www.${event.value.platform
    .toLowerCase()
    .replace(/\s/g, '')}com/benwright`
}
</script>

<template>
  <div class="link">
    <div class="link-header">
      <div class="link-number">
        <p>Link #{{ props.profileLinkId + 1 }}</p>
      </div>
      <button @click="profileLinkStore.removeProfileLink(props.profileLinkId)" class="remove-btn">
        Remove
      </button>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="inputs">
        <div class="input-field platform">
          <label>Platform</label>
          <div class="input-icons">
            <Dropdown
              @change="setPlaceholder"
              v-model="dropdownValue"
              :options="dropdownItems"
              optionLabel="platform"
              placeholder="Select a platform"
              class="dropdown"
              :class="{ 'p-invalid': dropError }"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="dropdown-value">
                  <img :alt="slotProps.value.icon" :src="slotProps.value.icon" />
                  <div>{{ slotProps.value.platform }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div style="display: flex; gap: 0.5rem">
                  <img :alt="slotProps.option.icon" :src="slotProps.option.icon" />
                  <div>{{ slotProps.option.platform }}</div>
                </div>
              </template>
            </Dropdown>
            <small class="p-error invalid-feedback invalid-dropdown" id="dd-error">{{
              dropError || '&nbsp;'
            }}</small>
          </div>
        </div>
        <div class="input-field">
          <label>Link</label>
          <div class="input-icons">
            <img class="link-icon" src="@/assets/images/icon-link.svg" alt="" />
            <input
              v-model="urlValue"
              type="text"
              name="url"
              :class="{ 'is-invalid': urlError }"
              :placeholder="placeholder"
            />
            <div class="invalid-feedback">{{ urlError }}</div>
          </div>
        </div>
      </div>
      <div class="save-btn-section">
        <button class="save-btn" type="submit">Save</button>
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

.save-btn-section {
  display: flex;
  justify-content: right;

  .save-btn {
    padding: 0.3875rem 1.3875rem;
    background-color: $purple;
    color: $white;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }
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
