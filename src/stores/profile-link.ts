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

  function updateProfileLink(profileLink: ProfileLink, index: number) {
    console.log(profileLink, index)
    profileLinks.value[index].url = profileLink.url
    profileLinks.value[index].platform = profileLink.platform
  }

  function removeProfileLink(linkIndex: any) {
    profileLinks.value?.splice(linkIndex, 1)
  }

  return { profileLinks, addProfileLink, removeProfileLink, updateProfileLink }
})
