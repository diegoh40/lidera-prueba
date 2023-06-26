export default {   
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setNews(state, news) {
      state.news = news;
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    addFavorite(state, news) {
      state.favorites.push(news);
    },
    removeFavorite(state, newsId) {
      const index = state.favorites.findIndex(favorite => favorite.id === newsId);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    }
  };
  