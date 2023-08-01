import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProfileLink } from '@/interfaces/profile-link'

export const useProfileLinkStore = defineStore('profileLink', () => {
  const profileLinks = ref<ProfileLink[]>([])
  const idNumb = ref(1)

  function addProfileLink(profileLink: ProfileLink) {
    profileLinks.value?.push({
      id: idNumb.value++,
      platform: profileLink,
      url: ''
    })
  }

  function updateProfileLink(profileLink: ProfileLink, index: number) {
    profileLinks.value[index].url = profileLink.url
    profileLinks.value[index].platform = profileLink.platform
  }

  function removeProfileLink(linkIndex: any) {
    console.log(linkIndex)
    profileLinks.value?.splice(linkIndex, 1)
  }

  return { profileLinks, addProfileLink, removeProfileLink, updateProfileLink }
})
