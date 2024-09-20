const mysql = require('mysql2')
require('dotenv').config()

// test connection database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, // default port: 3306 
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })

// test connection database
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // default port: 3306 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
})


module.exports = connection