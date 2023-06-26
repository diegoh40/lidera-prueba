import { createRouter, createWebHistory } from 'vue-router';
import Authentication from './components/Authentication.vue';
import NewsList from './components/NewsList.vue';
import Favorites from './components/Favorites.vue';

const routes = [
  { path: '/', component: Authentication },
  { path: '/news', component: NewsList },  
  { path: '/favorites', component: Favorites } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
