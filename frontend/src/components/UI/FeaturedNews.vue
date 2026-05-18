<script setup>
defineProps({
  news: Object
})
</script>

<template>
  <section class="featured-card">
    <div class="image-placeholder featured-img"></div>
    <div class="card-info">
      <span class="date">{{ news.date }}</span>
      <h3 class="featured-title">{{ news.newsTitle }}</h3>
      <p class="description">{{ news.newsDescription }}</p>
      <button class="btn-more">Читать далее</button>
    </div>
  </section>
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

.featured-card {
  display: flex;
  gap: 32px;
  margin-bottom: 25px;
  width: 1100px;
}

.featured-img {
  flex: 0 0 700px;
  height: 350px;
}

.card-info {
  display: flex;
  flex-direction: column;
  width: 368px;
}

.featured-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.description {
  font-size: 14px;
  line-height: 20px;
  color: #555;
  margin-bottom: 24px;
}

.btn-more {
  background-color: #2b79c9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  font-size: 14px;
}
</style>