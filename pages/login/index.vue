<template>
  <section class="container">
    <div class="login">
      <Icon name="EquidadoLogo"></Icon>
      <form class="login__form" type="submit">
        <div>
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            placeholder="Digite o seu email"
            class="form-control"
          />
        </div>
        <div>
          <label for="password" class="form-label">Senha</label>
          <input
            id="password"
            placeholder="Digite o sua senha"
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
      credentials: 0,
    };
  },
  async mounted() {

    let dadosUsuario = {
      email: "lucas@equidado.com.br",
      password: "1234equi"
    };
    let url = "/api/v1/token-auth/";

    axios.post(url, dadosUsuario, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
  },
};

</script>

<style lang="scss">
@import "../../styles/pages/login";
</style>
