import { getNews } from '../api/news';

export default {
  async fetchNews({ commit }) {
    try {
      const response = await getNews();
      commit('setNews', response.data.articles);
    } catch (error) {
      console.error(error);
    }
  },
  addNewsToFavorite({ commit }, news) {
    commit('addFavorite', news);
  },  
  removeNewsFromFavorite({ commit }, id) {
    commit('removeFavorite', id);
  }
  
};
