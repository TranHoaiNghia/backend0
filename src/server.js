require('dotenv').config() // config dot_env
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')
const Kitten = require('./models/kitten')

const app = express()

const port = process.env.PORT || 65535
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app)

// khai báo router
app.use('/', webRouter)


const cat = new Kitten({ name: 'Test Mongoose Hoai Nghia Cat' });
cat.save();


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




