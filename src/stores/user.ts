import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/interfaces/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({ imgUrl: '', email: '', firstName: '', lastName: '' })

  return { user }
})
