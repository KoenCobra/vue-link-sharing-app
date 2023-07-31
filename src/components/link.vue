<script setup lang="ts">
import DropDown from "@/components/drop-down.vue";
import {useDropdownStore} from "@/stores/dropdown";
import * as Yup from 'yup';
import { Form, Field } from 'vee-validate';
import {ref, watch} from "vue";

const dropdownStore = useDropdownStore();

const schema = Yup.object().shape({
  platform: Yup.string().required("Can't be empty"),
  url: Yup.string().required("Can't be empty").url('Must be a valid URL').test(
      'contains-platform',
      'Please check the URL',
      (value) => value && value.toLowerCase().includes(dropdownStore.dropdownItem.platform.toLowerCase()))
})

const formValues = ref({
  platform: dropdownStore.dropdownItem.platform,
})

watch(() => dropdownStore.dropdownItem.platform, (newVal) => {
  formValues.value.platform = newVal;
});

function onSubmit(values) {
  console.log(values)
}
</script>

<template>
  <div class="link">
    <div class="link-header">
      <div class="link-number">
        <img src="@/assets/images/icon-drag-and-drop.svg" alt="">
        <p>Link #1</p>
      </div>
      <button class="remove-btn">Remove</button>
    </div>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <div class="inputs">
        <div class="input-field platform">
          <label>Platform</label>
          <div class="input-icons" @click.stop="dropdownStore.toggleDropdown()">
            <img class="dev-link-icon" :src="dropdownStore.dropdownItem.icon" alt="">
            <Field name="platform" readonly type="text" v-model="formValues.platform"
                   :class="{ 'is-invalid': errors.platform }">
            </Field>
            <div class="invalid-feedback invalid-dropdown">{{errors.platform}}</div>
            <img class="chevron" :class="{flip: dropdownStore.isDropdownVisible}"
                 src="src/assets/images/icon-chevron-down.svg" alt="chevron">
          </div>
          <transition>
            <DropDown v-if="dropdownStore.isDropdownVisible" @click="dropdownStore.closeDropdown()"/>
          </transition>
        </div>
        <div class="input-field">
          <label>Link</label>
          <div class="input-icons">
            <img class="link-icon" src="@/assets/images/icon-link.svg" alt="">
            <Field type="text" name="url" :class="{ 'is-invalid': errors.url }">
              
            </Field>
            <div class="invalid-feedback">{{errors.url}}</div>
          </div>
        </div>
      </div>
      <button type="submit" > test submit</button>
    </Form>
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