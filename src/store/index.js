import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      news: [],
      favorites: []
    };
  },
  actions,
  mutations,
  getters
});

export default store;
