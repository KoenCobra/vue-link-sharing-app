<script>
import BaseImageInput from '@/components/base-image-input.vue'

export default {
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
        <input type="text" placeholder="e.g. John" />
      </div>
      <div class="profile-input-field">
        <label>Last name</label>
        <input type="text" placeholder="e.g. Appleseed" />
      </div>
      <div class="profile-input-field">
        <label>Email</label>
        <input type="email" placeholder="e.g. email@example.com" />
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
}
</style>
