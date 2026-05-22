<script setup>
import data from '../../NarfuNewsData.json'
import FeaturedNews from '@/components/UI/FeaturedNews.vue'
import NewsCard from '@/components/UI/NewsCard.vue'

const newsList = data.NewsArray
</script>

<template>
  <div class="container">
    <div class="header-line">
      <h2 class="title">Последние новости</h2>
    </div>

    <main class="main-content">
      <section class="news-grid">
        <div
          v-for="(news, index) in newsList"
          :key="index"
          :class="{ 'featured-item': index === 0 }"
        >
          <FeaturedNews
            v-if="index === 0"
            :news="news"
          />

          <NewsCard 
            v-else
            :news="news"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

.container {
  font-family: 'Open Sans', sans-serif;
  width: auto;
  padding-left: 40px;
  color: #333;
}

.header-line {
  width: 100%;
}

.title {
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  padding: 16px 0 10px 0;
  line-height: 1;
}

.main-content {
  margin: 0;
  padding-top: 10px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 25px 60px;
}

.featured-item {
  grid-column: span 3;
}
</style>