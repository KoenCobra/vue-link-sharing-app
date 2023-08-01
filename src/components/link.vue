<script setup lang="ts">
import * as Yup from 'yup';
import {Form, Field, useForm, useField} from 'vee-validate';
import {ref} from "vue";
import {useProfileLinkStore} from "@/stores/profile-link";
import type {DropdownItem} from "@/interfaces/dropdown-item";
import Dropdown from 'primevue/dropdown';

const profileLinkStore = useProfileLinkStore();
let selectedPlatform = ref<DropdownItem>();
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

const props = defineProps({
  profileLinkIndex: Number
})

const schema = Yup.object().shape({
  platform: Yup.string().required("Can't be empty"),
  url: Yup.string().required("Can't be empty").url('Must be a valid URL').test(
      'contains-platform',
      'Please check the URL',
      (value) => value && value.toLowerCase().replace(/\s/g, '').includes(selectedPlatform.value?.platform.toLowerCase().replace(/\s/g, '')))
})

const { handleSubmit } = useForm();
const { value, errorMessage } = useField('value', validateField);

function validateField(value) {
  if (!value) {
    return 'platform is required.';
  }

  return true;
}

const onSubmit = handleSubmit((values) => {
    console.log(values.value)
});

</script>

<template>
  <div class="link">
    <div class="link-header">
      <div class="link-number">
        <img src="@/assets/images/icon-drag-and-drop.svg" alt="">
        <p>Link #1</p>
      </div>
      <button @click="profileLinkStore.removeProfileLink(props.profileLinkIndex)" class="remove-btn">Remove</button>
    </div>
    <form @submit.prevent="onSubmit" :validation-schema="schema">
      <div class="inputs">
        <div class="input-field platform">
          <label>Platform</label>
          <div class="input-icons">
            <Dropdown
                aria-describedby="dd-error"
                id="dd"
                v-model="value"
                :options="dropdownItems"
                optionLabel="platform"
                placeholder="Select a platform"
                class="dropdown"
                :class="{ 'p-invalid': errorMessage }"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="dropdown-value">
                  <img
                      :alt="slotProps.value.icon"
                      :src="slotProps.value.icon"
                  />
                  <div>{{ slotProps.value.platform }}</div>
                </div>
                <span v-else>
                   {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div style="display:flex; gap:0.5rem">
                  <img
                      :alt="slotProps.option.icon"
                      :src="slotProps.option.icon"
                  />
                  <div>{{ slotProps.option.platform }}</div>
                </div>
              </template>
            </Dropdown>
            <small class="p-error invalid-feedback invalid-dropdown" id="dd-error">{{ errorMessage || '&nbsp;' }}</small>
          </div>
        </div>
        <div class="input-field">
          <label>Link</label>
          <div class="input-icons">
            <img class="link-icon" src="@/assets/images/icon-link.svg" alt="">
<!--            <Field type="text" name="url" :class="{ 'is-invalid': errors.url }">-->

<!--            </Field>-->
<!--            <div class="invalid-feedback">{{ errors.url }}</div>-->
          </div>
        </div>
      </div>
      <button type="submit"> test submit</button>
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

.v-enter-active, .v-leave-active {
  transition: all 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>