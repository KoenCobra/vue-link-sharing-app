﻿<script setup lang="ts"></script>

<template>
  <nav>
    <div class="navbar">
      <RouterLink to="/">
        <div class="logo"></div>
      </RouterLink>
      <div class="tabs">
        <RouterLink to="/links" active-class="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              fill="#737373"
              d="M11.154 14.65a.936.936 0 0 1 0 1.329l-.464.464a4.689 4.689 0 1 1-6.631-6.631l1.884-1.884a4.687 4.687 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.813 2.813 0 0 0-3.857.114l-1.883 1.882a2.813 2.813 0 1 0 3.978 3.978l.464-.464a.936.936 0 0 1 1.327 0ZM16.94 3.558a4.695 4.695 0 0 0-6.63 0l-.465.464a.94.94 0 1 0 1.328 1.328l.464-.464a2.813 2.813 0 0 1 3.978 3.978l-1.883 1.885a2.813 2.813 0 0 1-3.858.111.942.942 0 0 0-1.25 1.407 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .002-6.633v-.002Z"
            />
          </svg>
          <p class="tab-text">Links</p>
        </RouterLink>
        <RouterLink to="/profile" active-class="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              fill="#737373"
              d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"
            />
          </svg>
          <p class="tab-text">Profile Details</p>
        </RouterLink>
      </div>
      <RouterLink to="/preview" class="preview-btn">
        <span class="preview-span"> Preview </span>
        <img class="eye-icon" src="/images/icon-preview-header.svg" alt="" />
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/sass/variables';
@import '@/assets/sass/mixins';
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $white;
  padding: 1rem 1rem 1rem 1.5rem;
  border-radius: 12px;

  @media (max-width: 800px) {
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0 1rem;
  }

  .logo {
    background-image: url('/images/logo-devlinks-large.svg');
    background-repeat: no-repeat;
    width: 200px;
    height: 37px;

    @media (max-width: 800px) {
      background-image: url('/images/logo-devlinks-small.svg');
      width: 30px;
    }
  }

  .tabs {
    display: flex;
    gap: 1rem;

    a {
      padding: 0.6875rem 1.6875rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: $grey;
      font-weight: 600;
      @include transition;

      &:hover {
        color: $purple;
      }

      &:hover svg path {
        fill: $purple;
      }

      svg path {
        @include transition;
      }

      &.active {
        color: $purple;
        background-color: $lightPurple;
        border-radius: 8px;

        svg path {
          fill: $purple;
        }
      }

      .tab-text {
        @media (max-width: 800px) {
          display: none;
        }
      }
    }
  }
  .preview-span {
    @media (max-width: 800px) {
      display: none;
    }
  }

  .eye-icon {
    @media (min-width: 800px) {
      display: none;
    }
  }
  .preview-btn {
    padding: 0.6875rem 1.6875rem;
    gap: 0.5rem;
    border-radius: 8px;
    border: 1px solid $purple;
    font-weight: 600;
    @include transition;
    color: $purple;
    width: max-content;

    &:hover {
      background: $lightPurple;
    }
  }
}
</style>
