<script setup>
import { ref } from 'vue'
import AuthDialog from './AuthDialog.vue'

const emit = defineEmits(['toggle-sidebar'])
const isAuthOpen = ref(false)
</script>

<template>
  <header class="navbar">
    <div class="navbar-left">
      <button class="burger" @click="emit('toggle-sidebar')">
        <span class="mdi mdi-menu" />
      </button>
      <span class="mdi mdi-bullhorn" />
      <span>Новости</span>
    </div>
    <div class="navbar-right">
      <div class="search">
        <span class="mdi mdi-magnify search-icon"></span>
        <input type="text" placeholder="Поиск документа">
      </div>
      <button class="user-btn" @click="isAuthOpen = true">
        <span class="username">Войти</span>
        <!-- <span class="username">Иванов А.А</span> -->
        <span class="mdi mdi-chevron-down" style="visibility: hidden"></span>
      </button>
    </div>
  </header>

  <AuthDialog v-if="isAuthOpen" @close="isAuthOpen = false" />
</template>

<style scoped>
  /* Navbar */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    font-family: 'Open Sans', sans-serif;
    height: 40px;
    background: #01579B;
    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    z-index: 1000;
  }

  /* Navbar-left */
  .navbar-left span {
    font-weight: 400;
  }

  .navbar-left {
    display: flex;
    align-items: center;
  }

  .burger {
    background: none;
    border: none;

    cursor: pointer;

    display: flex;
    align-items: center;
    margin-right: 18px;

    color: inherit;
  }

  .navbar-left .mdi {
    margin-right: 10px;
  }

   /* Navbar-right */

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .navbar-right,
  .search input {
    font-weight: 400;
  }

  .user-btn {
    background: none;
    border: none;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 12px;

    color: inherit;
  }

  .user-btn {
    font-weight: 400;
  }

  .search {
    position: relative;
    display: flex;
    align-items: center;

    padding: 8px 12px;

    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 4px;

    gap: 4px;
    height: 32px;
  }

  .search-icon {
    position: absolute;
    left: 12px;

    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);;
    pointer-events: none;
  }

  .search input {
    padding-left: 32px;

    border: none;
    outline: none;
    background: transparent;

    font-size: 14px;
    width: 291px;
    height: 32px;

    color: rgba(255, 255, 255, 1);
  }

  .search input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .username {
    white-space: nowrap;
  }

  /* Icons */
  .mdi {
    font-size: 20px;
    line-height: 1;
  }
</style>