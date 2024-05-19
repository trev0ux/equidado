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
    try {
      const response = await useFetch(
        "https://equidado-008c032b8ff0.herokuapp.com/api/v1/token-auth/",
        {
          method: "POST",
          mode: 'no-cors',
          headers: {
            "Content-Type": "application/json",
          },
          body: this.credentials,
        }
      );
      const token = response.body;

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
@import "../../styles/pages/login";
</style>
