<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1 class="news-list-title">News List</h1>
    <div class="news-list">
      <div v-for="news in newsList" :key="news.id" class="news-item">
        <div class="news-item-image">
          <img :src="news.urlToImage" alt="News Image" class="news-item-image-img" />
        </div>
        <div class="news-item-content">
          <h3 class="news-item-title">{{ news.title }}</h3>
          <p class="news-item-description">{{ news.content }}</p>
          <button @click="addToFavorites(news)" class="add-button">Add to Favorites</button>
          <span class="news-item-id">{{ news.id }}</span>
        </div>
      </div>
    </div>    
  </div>
  <br>
  <br>
  <br>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      newsList: state => state.news,
      favoriteNews: state => state.favorites
    })
  },
  methods: {
    ...mapActions(['addNewsToFavorite', 'removeNewsFromFavorite']),
    addToFavorites(news) {
      this.addNewsToFavorite(news);
    },
    /* removeFromFavorites(newsId) {
      this.removeNewsFromFavorite(newsId);
    } */
  },
  created() {
    this.$store.dispatch('fetchNews');
  }
};
</script>
