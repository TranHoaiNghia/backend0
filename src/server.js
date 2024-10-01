require('dotenv').config() // config dot_env
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api')
const fileUpload = require('express-fileupload');

const connection = require('./config/database')

const { MongoClient } = require('mongodb');

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
app.use('/v1/api', apiRouter)


  ; (async () => {
    try {
      // using mongoose
      await connection();

       /*
      // using mongodb
      // Connection client URL
      const url = process.env.DB_HOST_WITH_DRIVE;
      const client = new MongoClient(url);

      // name database
      const dbName = process.env.DB_NAME;

      // connection database mongodb
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('customers');
      */
      
      app.listen(port, hostname, () => {
        console.log(`Backend zero app listening on port ${port}`)
      })
    } catch (error) {
      console.log("Error connect to DB: ", error);
    }
  }
  )()




