const express = require('express')//Estamos a dizer que é necessário a módulo express para o nosso projeto
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() //Comando para chamar as rotas

route.get('/', (req, res) => res.render('index', {page: 'enter-room'})) //Comando para criar uma rota
route.get('/createpass', (req, res) => res.render('index', {page: 'createpass'}))
route.get('/room/:room',(req, res) => res.render('room'))

//Formato que o formulario de dentro da modal tem que passsar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route //exportar a const route que contem dentro as  rotas