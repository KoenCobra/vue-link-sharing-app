<script setup lang="ts">

</script>

<template>
  <div class="link">
    <div class="link-header">
      <div class="link-number">
        <img src="@/assets/images/icon-drag-and-drop.svg" alt="">
        <p>Link #1</p>
      </div>
      <button class="remove-btn">Remove</button>
    </div>
    <div class="inputs">
      <div class="input-field">
        <label>Platform</label>
        <select>
          <option value="GitHub">GitHub</option>
        </select>
      </div>
      <div class="input-field">
        <label>Link</label>
        <input type="text">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables';
@import '@/assets/sass/mixins';
@import '@/assets/sass/input';

.link {
  padding: 1.25rem;
  background-color: $lightGrey;

  .link-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    .link-number {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      p {
        color: $grey;
        font-size: 1rem;
        font-weight: 700;
      }
    }
    
    .remove-btn{
      font-size: 1rem;
      font-weight: 400;
      color: $grey;
    }
  }
    

}
</style>