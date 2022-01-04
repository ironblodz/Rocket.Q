const express = require('express') //Estamos a dizer que é necessário a módulo express para o nosso projeto
const route = require('./route') //Estamos a dizer que é necessário pegar as rotas para dentro do servidor
const path = require('path') //É um módulo, é o caminho do projeto no meu computador

const server = express() //Comando para iniciar o módulo express

server.set('view engine', 'ejs') //Dizer ao express que a nossa view engine vai ser o módulo ejs

server.use(express.static('public')) //O express usa o contéudo estático que estara dentro do diretório public

server.set('views', path.join(__dirname, 'views')) //.join junta o caminho 'path' com o nosso __dirname que o src mas também com a view

server.use(express.urlencoded({extended: true})) //middleware, faz a conexão da rota com o controllador, descodifica o conteudo enviado para o controllador

server.use(route) //express usa o arquivo rotas

server.listen(3000, () => console.log("Rodando")) //Selecionar porta para o servidor

