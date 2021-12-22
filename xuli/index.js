const mysql = require('mysql')

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'btl_2'
})

module.exports =  db; 