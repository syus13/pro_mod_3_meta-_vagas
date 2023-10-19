# Projeto Meta Vagas

Este projeto é uma API RESTful para pesquisa de empregos. Ele permite que os usuários se registrem, façam login, pesquisem vagas de emprego, marquem vagas como favoritas e vejam seu histórico de pesquisa.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Instalação

1. Clone este repositório.
   ```bash
   git clone <url do repositório>

Navegue até a pasta do projeto.

cd job-search

Instale as dependências do projeto.

npm install

Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente.

touch .env

Abra o arquivo .env e adicione suas variáveis de ambiente.

DATABASE_URL=<url do banco de dados>
JWT_SECRET_KEY=<chave secreta JWT>

Inicie o servidor.

npm start

Uso
A API tem várias rotas que você pode usar para interagir com ela.

## Usuários
Registro de Usuário: POST /users
Login do Usuário: POST /login
Atualizar Perfil do Usuário: PUT /users/:id
Marcar Vaga como Favorita: PUT /users/:id
Obter Histórico de Busca do Usuário: GET /users/searchHistory?userId=<userId>&page=<page>&perPage=<perPage>

## Vagas
Criar uma nova vaga: POST /jobs
Filtrar vagas: POST /jobs/filter
Marcar vaga como favorita: POST /jobs/favorite/:id

## Pesquisa de Tecnologia
Registrar pesquisa de tecnologia: POST /techSearch/register
Obter as principais tecnologias pesquisadas: GET /techSearch/topTechnologies
Obter as principais cidades para a tecnologia mais pesquisada: GET /techSearch/topCitiesForMostSearchedTech
Pesquisar tecnologia e cidade: GET /techSearch/search?technology=<nome da tecnologia>&city=<nome da cidade>
Obter resultados de pesquisa de tecnologia: GET /techSearch/searchTech?technology=<nome da tecnologia>&city=<nome da cidade>&page=<número da página>&perPage=<itens por página>

## Histórico de Pesquisa do Usuário
Adicionar histórico de pesquisa do usuário: POST /userSearchHistory/add
Obter últimas pesquisas do usuário: GET /userSearchHistory/lastSearches/:userId

## Pesquisa de Cidade
Obter as 5 principais cidades: GET /citySearch/top5
Obter as 5 principais cidades para a tecnologia mais pesquisada: GET /citySearch/top5cityAndTechnonogy

## Paginação
A API suporta paginação nas rotas que retornam múltiplos itens. Você pode usar os parâmetros de consulta page e perPage para controlar quais itens são retornados. Por exemplo, se você quiser obter a segunda página de resultados e tiver 10 itens por página, você faria uma solicitação GET para http://localhost:3333/techSearch/searchTech?technology=<nome da tecnologia>&city=<nome da cidade>&page=2&perPage=10. Isso retornaria os itens 11-20 dos resultados da pesquisa.

## Testes
Para executar os testes, use o seguinte comando:
npm test

Licença
MIT


Por favor, substitua `http://localhost:3333` pelo endereço e porta reais do seu servidor. Além disso, lembre-se de substituir os espaços reservados como `<token>`, `<userId>`, etc., pelos valores reais.

Espero que isso ajude! Se você tiver mais perguntas ou precisar de mais ajuda, fique à vontade para perguntar.

