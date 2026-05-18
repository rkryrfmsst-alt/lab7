<script setup>
  defineProps({
    open: {
      type: Boolean,
      default: true
    }
  })
</script>

<template>
  <aside class="menu" :class="{ collapsed: !open }">

    <router-link to="/" class="item">
      <span class="icon mdi mdi-home"></span>
      <span class="text">Последние новости</span>
    </router-link>

    <router-link to="/most-viewed" class="item">
      <span class="icon mdi mdi-fire"></span>
      <span class="text">Самые просматриваемые</span>
    </router-link>

  </aside>
</template>

<style scoped>
  .menu {
    position: fixed;
    top: 40px;
    left: 0;

    width: 220px;
    height: calc(100vh - 40px);

    background: white;
    box-shadow: 15px 0 25px rgba(0, 0, 0, 0.1);

    overflow: hidden;

    transition: transform 0.25s ease;
  }

  .item {
    all: unset;
    cursor: pointer;

    width: 100%;
    padding: 9px 8px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 10px;

    font-size: 14px;
    font-weight: 400;
    color: #131B30;

    transition: 0.2s;
  }

  .item.active {
    background: #DDEAF8;
    color: #1976D2;
  }

  .item.active span {
    color: #1976D2;
  }

  .icon {
    font-size: 20px;
    line-height: 1;
  }

  .text {
    flex: 1;
  }

  .router-link-active {
    background: #DDEAF8;
    color: #1976D2;
  }

  .menu.collapsed {
    transform: translateX(-100%);
  }

  .menu.collapsed .text {
    opacity: 0;
    width: 0;
    overflow: hidden;
    display: none;
  }

  .menu.collapsed .item {
    justify-content: center;
  }
</style>