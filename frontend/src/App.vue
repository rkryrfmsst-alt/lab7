<script setup>
  import { ref, onMounted, watch, inject } from 'vue'
  import Navbar from './components/UI/Navbar.vue'
  import Sidebar from './components/UI/Sidebar.vue'

  const isSidebarOpen = ref(true)
  const userService = inject('userService')

  onMounted(() => {
    const saved = localStorage.getItem('sidebar')
    if (saved !== null) {
      isSidebarOpen.value = saved === 'true'
    }

    const recordId = sessionStorage.getItem('recordId')
    if (recordId) {
      userService.getCurrentUser(recordId)
        .then((user) => {
          console.log('Текущий пользователь:', user)
        })
    }
  })

  watch(isSidebarOpen, (val) => {
    localStorage.setItem('sidebar', val)
  })
</script>

<template>
  <div class="layout" :class="{ collapsed: !isSidebarOpen }">

    <Navbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

    <Sidebar :open="isSidebarOpen" />

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
  .layout {
    padding-top: 40px;
    padding-bottom: 50px;
  }

  .content {
    margin-left: 220px;
    transition: margin-left 0.25s ease;
  }

  .layout.collapsed .content {
    margin-left: 80px;
  }
</style>