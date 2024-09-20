require('dotenv').config() // config dot_env
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')

const app = express()

const port = process.env.PORT || 65535
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

// khai báo router
app.use('/',webRouter)


connection.query(
  'select * from Users u',
  function (err, results, fields){
    console.log('Check results: ', results)
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})