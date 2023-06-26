<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
   <div class="logo-container">
      <router-link to="/news">
        <img src="../assets/logo.png" alt="Logo" class="logo-image" />
        <span class="return-text">Return to News</span>
      </router-link>      
    </div>
    <h1 class="favorites-heading">Favorites news</h1>
    <ul class="favorites-list">
      <li v-for="favorite in favoriteNews" :key="favorite.id" class="favorites-item">
        <div class="favorites-content">
          <h3 class="favorites-title">{{ favorite.title }}</h3>
          <img :src="favorite.urlToImage" alt="News Image" class="favorites-image" />
          <p class="favorites-description">{{ favorite.content }}</p>
          <p class="favorites-date">{{ formatDate(favorite.publishedAt) }}</p>
        </div>
        <button @click="removeFromFavorites(favorite.id)" class="favorites-remove-button">Remove</button>
      </li>
    </ul>
  </div>
  <br>
  <br>
  <br>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment';

export default {
  computed: {
    ...mapState({
      favoriteNews: state => state.favorites
    })
  },
  methods: {
    ...mapActions(['removeNewsFromFavorite']),
    removeFromFavorites(newsId) {
      this.removeNewsFromFavorite(newsId);
      localStorage.setItem('favoriteNews', JSON.stringify(this.favoriteNews));
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    }
  }
};
</script>