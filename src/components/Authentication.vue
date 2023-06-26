<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-container">
    <h1 class="title">World News</h1>
    <img src="../assets/news-image.png" alt="News Image" class="news-image">
    <p class="auth-message">Para autenticarse, ingrese: <br>Email : usuario@example.com <br>Password: lidera </p>
    <form @submit="login" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Verifica las credenciales ingresadas
      if (this.email === 'usuario@example.com' && this.password === 'lidera') {
        // Autenticación exitosa
        this.$store.commit('setAuthenticated', true);
        //alert('Credenciales correctas!!');
        this.$router.push('/news');
      } else {
        // Credenciales incorrectas
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    }
  }
};
</script>
