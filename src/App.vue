<template>
  <div>
    <navbar v-if="isLoggedIn"></navbar>
    <router-view v-if="isAuthenticated"></router-view>
    <Authentication v-else></Authentication>
  </div>
  <footer class="footer">
    <p class="author-year">Autor: Diego Hernández | Año: 2023 | Prueba Técnica - FrontEnd en Vue Lidera</p>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';
import Authentication from './components/Authentication.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
    Authentication
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    isAuthenticated(newVal) {
      this.isLoggedIn = newVal;
    }
  },
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>
