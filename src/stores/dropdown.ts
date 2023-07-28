import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDropdownStore = defineStore('dropdown', () => {
  const isDropdownVisible = ref(false);
  function closeDropdown() {
    isDropdownVisible.value = false
  }

  function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value
  }

  return { isDropdownVisible, closeDropdown, toggleDropdown }
})
