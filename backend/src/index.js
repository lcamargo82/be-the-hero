//importando modulo express
const express = require('express');

//permisao de quem poderá acessar a aplicacao
const cors = require('cors');

//importando as rotas
const routes = require('./routes');

//iniciando a aplicação
const app = express();

//como está em dev, manterá assim, mas em prod, dentro dos (), inserir a url do app, ex: app.use(cors({ origin: 'https://...'}));
app.use(cors());
//para sempre aceitar receber e converter em formatos json
app.use(express.json());
app.use(routes);

//rotas, sempre recebem 2 parametros - request e response - express
//o que vem depois da barra sao chamados de recursos

//tipos de parametros: query params - ex: /user?page=2... / route params - ex: user/:id / request body - corpo da requicao

//bd - configuração do banco de dados - driver: ex: select * from users // query builder: ex: table('users').select('*').where('...')
//query builder - knex.js

app.listen(3333);

//definindo entidades de acordo com layout
    //primeiro cadastro - ong
    //segundo - casos

//funcoes
    //login ong
    //cadastro ong
    //crud casos
    //listar todos os casos
    //contato
