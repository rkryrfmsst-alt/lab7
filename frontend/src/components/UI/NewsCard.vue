<script setup>
defineProps({
  news: Object
})
</script>

<template>
  <div class="small-card">
    <div class="image-placeholder small-img"></div>
    <div class="small-card-content">
      <span class="date">{{ news.date }}</span>
      <h4 class="small-title">{{ news.newsTitle }}</h4>
    </div>
  </div>
</template>

<style scoped>
.image-placeholder {
  background-color: #d9d9d9;
}

.date {
  display: block;
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
}

.small-card {
  width: 320px;
}

.small-img {
  width: 320px;
  height: 180px;
  margin-bottom: 12px;
}

.small-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
}
</style>