const express = require('express')
const routerAPI = express.Router()

const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, 
    postUpLoadSingleFileAPI , postUploadMultipleFilesAPI} = require('../controllers/apiControllers')

const {postCreateCustomers, postCreateArrayCustomers, 
    getAllCustomers, patchCustomers, deleteACustomer, deleteManyCustomers} = require('../controllers/customersControllers')

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
routerAPI.post('/customers-many', postCreateArrayCustomers)
routerAPI.get('/customers', getAllCustomers)
routerAPI.patch('/customers', patchCustomers)
routerAPI.delete('/customers', deleteACustomer)
routerAPI.delete('/customers-many', deleteManyCustomers)

routerAPI.get('/info', (req, res) => {
    console.log('Check Query String: ', req.query)

    res.status(200).json({
        data: req.query
    })
})


routerAPI.get('/info/:name/:addres', (req, res) => {
    console.log('Check Params: ', req.params)

    res.status(200).json({
        data: req.params
    })
})



module.exports = routerAPI