<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="sticky-nav">
    <div class="logo-container">
      <img src="../assets/news-image.png" alt="Logo" class="logo">
    </div>
    <div class="nav-links">
      <router-link to="/news" class="nav-link">News</router-link>
      <router-link to="/favorites" class="nav-link">
        Favorites
        <span class="favorites-count">{{ favoriteNews.length }}</span>
      </router-link>
    </div>
    <button class="logout-button" @click="logout">
      Logout
    </button>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      newsList: state => state.news,
      favoriteNews: state => state.favorites
    })
  },
  methods: {
    logout() {
      // Cierra sesión y redirige al usuario a la página de inicio de sesión
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
}
</script>
  