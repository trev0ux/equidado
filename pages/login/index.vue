<template>
  <section class="container">
    <div class="login">
      <Icon name="EquidadoLogo"></Icon>
      <form class="login__form" @submit.prevent="submitForm">
        <div>
          <label for="email" class="form-label">Email</label>
          <input
            v-model="email"
            id="email"
            placeholder="Digite o seu email"
            class="form-control"
          />
        </div>
        <div>
          <label for="password" class="form-label">Senha</label>
          <input
            v-model="password"
            id="password"
            placeholder="Digite o sua senha"
            type="password"
            class="form-control"
          />
        </div>
        <button class="btn btn-primary" type="submit">Entrar</button>
      </form>
    </div>
  </section>
</template>

<script>
import { Icon } from "#components";
import axios from 'axios';

export default {
  name: "Login",
  components: {
    Icon,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      let dadosUsuario = {
        email: this.email,
        password: this.password
      };
      let url = "/api/v1/token-auth/";

      try {
        const response = await axios.post(url, dadosUsuario, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          }
        });
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        this.redirectToFeedbackPage();
      } catch (error) {
        console.error('Erro:', error);
      }
    },
    getToken() {
      return localStorage.getItem('authToken');
    },
    redirectToFeedbackPage() {
      this.$router.push({ name: 'StepOne' });
    }
  },
  mounted() {
    let token = this.getToken();
    if (token != null) {
      this.redirectToFeedbackPage();
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/pages/login";
</style>
