require('dotenv').config() // config dot_env
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')
const fileUpload = require('express-fileupload');

const connection = require('./config/database')

const app = express()

const port = process.env.PORT || 65535
const hostname = process.env.HOST_NAME

// config fileUPload
app.use(fileUpload())

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data 

//config template engine
configViewEngine(app)

// khai báo router
app.use('/', webRouter)
app.use('/v1/api', apiRouter )


;(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`)
    })
  } catch (error) {
    console.log("Error connect to DB: ", error);
  }
}
)()




