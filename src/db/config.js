const sqlite3 = require('sqlite3') //Importa o módulo sqlite3
const { open } = require('sqlite') //Importa apenas a função open do módulo sqlite
const path = require('/src/db/rocketq.sqlite')


module.exports = () => 
    open({
        filename: '/src/db/rocketq.sqlite', //ficheiro da database
        driver: sqlite3.Database,  //Comanda a database
    })
