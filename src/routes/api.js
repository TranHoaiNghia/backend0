const express = require('express')
const routerAPI = express.Router()

const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, 
    postUpLoadSingleFileAPI , postUploadMultipleFilesAPI} = require('../controllers/apiControllers')

const {postCreateCustomers} = require('../controllers/customersControllers')

//khai báo route
// router.Method('/route', handler)
routerAPI.get('/', (req, res) =>{
    res.send("Hello world with API")
})

routerAPI.get('/users', getUsersAPI)
routerAPI.post("/users", postCreateUserAPI)
routerAPI.put("/users", putUpdateUserAPI)
routerAPI.delete("/users", deleteUserAPI)

routerAPI.post("/file", postUpLoadSingleFileAPI)
routerAPI.post('/files', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomers)


module.exports = routerAPI