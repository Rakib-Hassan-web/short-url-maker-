const express = require('express');
const DB_Config = require('./dbConfig');
const routee = require('./routes');
var cookieParser = require('cookie-parser')
const app = express()
app.use(express.json())
app.use(cookieParser())


DB_Config()

app.use(routee)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})