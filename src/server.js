const express = require('express')
const path = require('path')
require('dotenv').config() // config dot_env

const app = express()
const port = process.env.PORT || 65535
const hostname = process.env.HOST_NAME

// config template view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World! hello man')
})

app.get('/abc', (req, res) => {
    res.send("Check success Abc")
})

app.get('/hoidanIT', (req, res) => {
    // res.send('<h1>Hoi dan It</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})