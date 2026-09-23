const express = require('express');
const DB_Config = require('./dbConfig');
const app = express()
app.use(express.json())

DB_Config()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})