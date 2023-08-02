<script>
import BaseImageInput from '@/components/base-image-input.vue'
import { useUserStore } from '@/stores/user'

export default {
  methods: { useUserStore },
  components: { BaseImageInput },
  data() {
    return {
      imageFile: null
    }
  }
}
</script>

<template>
  <div class="profile-section">
    <div class="profile-header">
      <h1>Profile Details</h1>
      <p class="profile-sub">Add your details to create a personal touch to your profile.</p>
    </div>
    <div class="upload-section">
      <p class="picture-label">Profile picture</p>
      <BaseImageInput v-model="imageFile" />
      <p class="image-label">Image must be below 1024x1024px. Use PNG or JPG format.</p>
    </div>
    <div class="user-details-section">
      <div class="profile-input-field">
        <label>First name</label>
        <input v-model="useUserStore().user.firstName" type="text" placeholder="e.g. John" />
      </div>
      <div class="profile-input-field">
        <label>Last name</label>
        <input v-model="useUserStore().user.lastName" type="text" placeholder="e.g. Appleseed" />
      </div>
      <div class="profile-input-field">
        <label>Email</label>
        <input
          v-model="useUserStore().user.email"
          type="email"
          placeholder="e.g. email@example.com"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables.scss';

.profile-section {
  background-color: $white;
  border-radius: 12px;
  padding: 2.5rem;

  h1 {
    color: $darkGrey;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .profile-sub {
    color: $grey;
    margin-bottom: 2.5rem;
  }

  .upload-section {
    background-color: $lightGrey;
    border-radius: 12px;
    padding: 1.25rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-between;

    .picture-label {
      color: $grey;
    }

    .image-label {
      color: $grey;
      font-size: 0.75rem;
    }
  }

  .user-details-section {
    background-color: $lightGrey;
    border-radius: 12px;
    padding: 1.25rem;
    margin-top: 1.5rem;
    display: grid;
    gap: 0.75rem;

    .profile-input-field {
      width: 100%;
      display: grid;
      grid-template-columns: 35% 65%;
      align-items: center;

      ::placeholder {
        color: $darkGrey;
        opacity: 0.5;
      }

      label {
        color: $grey;
      }

      input {
        padding: 0.75rem 1rem;
        border-radius: 8px;
        border: 1px solid $borders;
        background: $white;
        outline: none;
        color: $darkGrey;

        &:focus {
          border-color: $purple;
          box-shadow: 0 0 32px 0 rgba(99, 60, 255, 0.25);
        }
      }
    }
  }
}
</style>
