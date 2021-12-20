const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(morgan('combined'))

const db = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'btl_2'
})

app.post('/trangchu', function(req, res) {

}) 

app.get('/show', function (req, res) {
  db.query('SELECT fullname, CCCD,  gender, address, religion, job FROM `resume_btl` ', (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(result)
    }
  })
})
 
app.get('/trangchu', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);