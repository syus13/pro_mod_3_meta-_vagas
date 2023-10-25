
---

# 🚀 Meta Vagas API 🚀

Bem-vindo à Meta Vagas API, a sua estação espacial para encontrar as melhores vagas de emprego no universo da tecnologia! 🌌

## 🛠️ Instalação 🛠️

1. Clone este repositório para o seu computador. É como fazer o download de um mapa estelar!
2. Execute `npm install` para instalar as dependências. Isso é como abastecer sua nave espacial!
3. Configure o arquivo `.env` com suas variáveis de ambiente. Isso é como ajustar as configurações do seu painel de controle!
4. Execute `npm start` para iniciar o servidor. 3... 2... 1... Ignição!

## 🌐 Rotas da API 🌐

### 👥 Usuários 👥

- Registro de Usuário (POST): `http://localhost:3000/users`
- Login do Usuário (POST): `http://localhost:3000/login`
- Atualizar Perfil do Usuário (PUT): `http://localhost:3000/users/:id`

### 💼 Vagas 💼

- Criar uma nova vaga (POST): `http://localhost:3000/jobs`
- Buscar vagas vagas (GET): `http://localhost:3000/jobs/search`
- Marcar vaga como favorita (POST): `http://localhost:3000/jobs/favorite/:id`

### 💻 Pesquisa de Tecnologia 💻 

- Registrar pesquisa de tecnologia (POST): `http://localhost:3000/techSearch/register`
- Obter as principais tecnologias pesquisadas (GET): `http://localhost:3000/techSearch/topTechnologies`
- Obter as principais cidades para a tecnologia mais pesquisada (GET): `http://localhost:3000/techSearch/topCitiesForMostSearchedTech`
- Pesquisar tecnologia e cidade (GET): `http://localhost:3000/techSearch/search?technology=<nome da tecnologia>&city=<nome da cidade>`
- Obter resultados de pesquisa de tecnologia (GET): `http://localhost:3000/techSearch/searchTech?technology=<nome da tecnologia>&city=<nome da cidade>&page=<número da página>&perPage=<itens por página>`


### 🏙️ Pesquisa de Cidade 🏙️

- Obter as 5 principais cidades (GET): `http://localhost:3000/citySearch/top5`
- Obter as 5 principais cidades para a tecnologia mais pesquisada (GET): `http://localhost:3000/citySearch/top5cityAndTechnonogy`

### 🕵️ Histórico de Pesquisa do Usuário 🕵️

Obter histórico de pesquisa do usuário (GET): http://localhost:3000/userSearchHistory/:userId/history

## 📖 Paginação 📖

A API suporta paginação nas rotas que retornam múltiplos itens. Você pode usar os parâmetros de consulta `page` e `perPage` para controlar quais itens são retornados. Por exemplo, se você quiser obter a segunda página de resultados e tiver 10 itens por página, você faria uma solicitação GET para `http://localhost:3000/jobs/filter?page=2&perPage=10`. Isso retornaria os itens 11-20 dos resultados da pesquisa.

## 📦 Dependências 📦

As seguintes dependências foram instaladas para este projeto:

- bcrypt
- cors
- express
- jsonwebtoken
- dotenv
- tsup
- tsx
- typescript
- vitest
- mongoose
- yup

## 👾 Teste a API! 👾

Convido você a testar esta API! Sinta-se à vontade para fazer requisições e explorar todas as funcionalidades que tenho a oferecer. Se você encontrar algum erro ou tiver alguma sugestão, por favor, me avise!


## ©️ Licença ©️

MIT


