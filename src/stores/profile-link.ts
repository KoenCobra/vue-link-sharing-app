import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProfileLink } from '@/interfaces/profile-link'

export const useProfileLinkStore = defineStore('profileLink', () => {
  const profileLinks = ref<ProfileLink[]>([])
  const idNumb = ref(1)

  const addProfileLink = () => {
    profileLinks.value?.push({
      id: idNumb.value++,
      platform: {},
      url: ''
    })
  }

  const removeProfileLink = (id: number) => {
    profileLinks.value = profileLinks.value?.filter((link) => link.id !== id)
    localStorage.setItem('profileLinks', JSON.stringify(profileLinks.value))
  }

  return { profileLinks, idNumb, addProfileLink, removeProfileLink }
})
