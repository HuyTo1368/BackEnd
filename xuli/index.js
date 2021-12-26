const mysql = require('mysql')

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'population2'
})
db.connect((err) => {
    if (err) throw err;
    console.log('Connect mysql successful');
})

module.exports =  db; 
