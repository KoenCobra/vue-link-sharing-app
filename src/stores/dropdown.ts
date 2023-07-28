import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {DropdownItem} from "@/interfaces/dropdown-item";

export const useDropdownStore = defineStore('dropdown', () => {
    const isDropdownVisible = ref(false);
    const dropdownItem = ref<DropdownItem>({icon:'', platform:''})

    function closeDropdown() {
        isDropdownVisible.value = false
    }

    function toggleDropdown() {
        isDropdownVisible.value = !isDropdownVisible.value
    }

    function setDropdownItem(item: DropdownItem) {
        dropdownItem.value = item
        console.log(dropdownItem.value?.platform)
    }

    return {isDropdownVisible, dropdownItem, closeDropdown, toggleDropdown, setDropdownItem}
})
