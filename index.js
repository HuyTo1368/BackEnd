const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(morgan('combined'))

const router = require('./router/index');

app.use(router);
 
app.listen(3000);
