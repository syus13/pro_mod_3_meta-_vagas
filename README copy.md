# Sistema Meta Vagas

## Entidades

User {
name string
email: string
password: string
}

job{
  position: string
  salary: number
  city: cityId
  website: string
  company: string
  description: string
  link:string
}

technology{
  name: string
}

city{
  name: string
}

techSearch{
  technology: tecnologyId
  count: number
}

citySearch{
  city: cityId
  technology: technologyId
  count: number
}

## Requisitos funcionais Obrigatórios
1 [] O sistema deve permitir o cadastro de usuários com nome, email e senha.
2 [] O sistema deve permitir que os usuários façam login usando seu e-mail e senha.
3 [] O usuário deve ser capaz de buscar vagas utilizando múltiplos filtros como: cargo, tecnologia, localização, tipo de vaga, regime de trabalho, tamanho da empresa, faixa salarial e nível de experiência.
4 [] Ao realizar uma busca por tecnologia e cidade, o sistema deve registrar essa contagem em uma tabela específica no banco de dados.
5 [] O sistema deve fornecer uma funcionalidade para mostrar as 5 tecnologias mais buscadas.
6 [] O sistema deve fornecer uma funcionalidade para mostrar as 5 cidades que mais procuram a tecnologia mais buscada.
7 [] Os usuários devem ser capazes de cadastrar uma nova vaga, informando: cargo, salário, cidade, site da vaga, tecnologias, empresa, descrição da vaga e link do site.

## Requisitos funcionais Opcionais
1 [] O sistema deve permitir que os usuários atualizem seu perfil, incluindo nome e senha.
2 []: O sistema deve permitir que os usuários marquem vagas como "Favoritos", facilitando o acesso posterior.
3 [] O sistema deve oferecer um histórico das últimas buscas realizadas pelo usuário.
4 [] As consultas realizadas no sistema podem ser apresentadas de forma paginada.

## Dependencias
  npm install bcrypt cors express jsonwebtoken dotenv tsup tsx typescript vitest -D

  npm install mongoose yup 

  npx tsc --init 

metaVagas  