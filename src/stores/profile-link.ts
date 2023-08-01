import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProfileLink } from '@/interfaces/profile-link'

export const useProfileLinkStore = defineStore('profileLink', () => {
  const profileLinks = ref<ProfileLink[]>([])

  function addProfileLink(profileLink: ProfileLink) {
    profileLinks.value?.push({
      platform: profileLink,
      url: ''
    })
  }

  function removeProfileLink(linkIndex: any) {
    profileLinks.value?.splice(linkIndex, 1)
  }

  return { profileLinks, addProfileLink, removeProfileLink }
})
