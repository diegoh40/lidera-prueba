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
    },
    setFavorites(state, favorites) {  
      const uniqueFavorites = favorites.reduce((unique, favorite) => {
        return unique.some(item => item.id === favorite.id) ? unique : [...unique, favorite];
      }, []);
      state.favorites = uniqueFavorites;
    }
  };
  