<script setup lang="ts">
import DropDown from "@/components/drop-down.vue";
import {useDropdownStore} from "@/stores/dropdown";

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
    <div class="inputs">
      <div class="input-field platform">
        <label>Platform</label>
        <div class="input-icons" @click.stop="useDropdownStore().toggleDropdown()">
          <input type="text">
          <img class="chevron" :class="useDropdownStore().isDropdownVisible ? 'flip' : ''"
               src="src/assets/images/icon-chevron-down.svg" alt="chevron">
        </div>
        <transition>
          <DropDown v-if="useDropdownStore().isDropdownVisible" @click="useDropdownStore().closeDropdown()"/>
        </transition>
      </div>
      <div class="input-field">
        <label>Link</label>
        <div class="input-icons">
          <img class="link-icon" src="@/assets/images/icon-link.svg" alt="">
          <input type="text">
        </div>
      </div>
    </div>
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