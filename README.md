# Equidado
> Inteligência na diversidade dos dados

Este projeto é responsável por fornecer um sistema com interface intuítiva e segura para a realização de feedbacks (*pelo funcionário*) e para consulta dos insights (*por representantes da empresa*).

## Setup

Instale as dependências:
*este projeto foi testado utilizando o npm*

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Rodando a aplicação

O projeto consulta o [Equidado API](https://equidado-008c032b8ff0.herokuapp.com) e é necessário está autenticado para consumo da API.

**Endpoint disponíveis**:

- POST /api/v1/token-auth/ -> obter token de acesso da api a partir do usuário cadastrado (usuário demo: `lucas@equidado.com.br` e senha: `1234equi`);
- GET /api/v1/feedback/ -> retorna todos os feedbacks do usuários;
- POST /api/v1/feedback/ -> salva o feedback;

### Ambiente desenvolvimento

Rodando o projeto em `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Ambiente produção

Construa a aplicação para produção:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Pré-visualizando o projeto de produção "buildado":

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Consulte o material [deployment documentation](https://nuxt.com/docs/getting-started/deployment) para mais informações sobre deploy.

