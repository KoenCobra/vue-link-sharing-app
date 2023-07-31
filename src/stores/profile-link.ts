import {defineStore} from "pinia";
import {ref} from "vue";
import type {ProfileLink} from "@/interfaces/profile-link";

export const useProfileLinkStore = defineStore('profileLink', () => {
    const profileLinks = ref<ProfileLink[]>([])

    function addProfileLink(profileLink: any) {
        profileLinks.value?.push({
            platform: profileLink,
            url: ''
        })
    console.log(profileLinks.value)
    }


    function removeProfileLink(linkIndex: any) {
        profileLinks.value?.splice(linkIndex, 1)}

    return {profileLinks, addProfileLink, removeProfileLink}
})