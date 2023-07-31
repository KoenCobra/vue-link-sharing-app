import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {DropdownItem} from "@/interfaces/dropdown-item";

export const useDropdownStore = defineStore('dropdown', () => {
    const isDropdownVisible = ref(false);
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
    const dropdownItem = ref<DropdownItem>({icon:'', platform:''})

    function closeDropdown() {
        isDropdownVisible.value = false
    }

    function toggleDropdown() {
        isDropdownVisible.value = !isDropdownVisible.value
    }

    function setDropdownItem(item: DropdownItem) {
        dropdownItem.value = item
    }

    return {isDropdownVisible, dropdownItem, dropdownItems, closeDropdown, toggleDropdown, setDropdownItem}
})
