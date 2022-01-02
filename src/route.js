const express = require('express')//Estamos a dizer que é necessário a módulo express para o nosso projeto

const route = express.Router() //Comando para chamar as rotas

route.get('/', (req, res) => res.render('index')) //Comando para criar uma rota
route.get('/createpass', (req, res) => res.render('create'))
route.get('/room',(req, res) => res.render('room'))

route.post('/room/:room/:question/:action', (req, res)=> res.render())

module.exports = route //exportar a const route que contem dentro as  rotas