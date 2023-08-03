import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProfileLink } from '@/interfaces/profile-link'

export const useProfileLinkStore = defineStore('profileLink', () => {
  const profileLinks = ref<ProfileLink[]>(JSON.parse(localStorage.getItem('profileLinks') || '[]'))
  const idNumb = ref(1)

  function addProfileLink(profileLink: ProfileLink, background: string) {
    profileLinks.value.push({
      id: idNumb.value++,
      platform: profileLink,
      url: '',
      background: background
    })
    localStorage.setItem('profileLinks', JSON.stringify(profileLinks.value))
  }

  function updateProfileLink(profileLink: ProfileLink, id: number) {
    const linkToUpdate = profileLinks.value.find((link) => link.id === id)

    if (linkToUpdate) {
      linkToUpdate.url = profileLink.url
      linkToUpdate.platform = profileLink.platform
      localStorage.setItem('profileLinks', JSON.stringify(profileLinks.value))
    }
  }

  function removeProfileLink(linkIndex: any) {
    profileLinks.value.splice(linkIndex, 1)
    localStorage.setItem('profileLinks', JSON.stringify(profileLinks.value))
  }

  return { profileLinks, addProfileLink, removeProfileLink, updateProfileLink }
})
