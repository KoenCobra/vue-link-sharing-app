<script>
import { useUserStore } from '@/stores/user'
export default {
  data() {
    return {
      imageData: null
    }
  },
  methods: {
    chooseImage() {
      this.$refs.fileInput.click()
    },
    onSelectFile() {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
          useUserStore().user.imgUrl = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    }
  }
}
</script>

<template>
  <div
    class="base-image-input"
    :style="{ 'background-image': `url(${imageData})` }"
    @click="chooseImage"
  >
    <div class="placeholder" :class="{ uploaded: imageData }">
      <img src="/images/icon-upload-image.svg" alt="" />
      <p v-if="!imageData">+ Upload Image</p>
      <p v-else>Change Image</p>
    </div>

    <input class="file-input" ref="fileInput" type="file" @input="onSelectFile" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables';

.base-image-input {
  display: flex;
  height: 193px;
  width: 193px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-color: $lightPurple;
  border-radius: 12px;
}

.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $purple;
  font-size: 1rem;
  font-weight: 600;

  &.uploaded {
    color: $white;
    z-index: 2;
    position: relative;
    width: 100%;
    height: 100%;
    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(12%) hue-rotate(214deg)
        brightness(103%) contrast(100%);
    }

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: black;
      opacity: 0.5;
      border-radius: 12px;
      z-index: -1;
    }
  }
}

.file-input {
  display: none;
}
</style>
