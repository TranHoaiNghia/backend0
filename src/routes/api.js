const express = require('express')
const routerAPI = express.Router()

const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI} = require('../controllers/apiControllers')

//khai báo route
// router.Method('/route', handler)
routerAPI.get('/', (req, res) =>{
    res.send("Hello world with API")
})

routerAPI.get('/users', getUsersAPI)

routerAPI.post("/users", postCreateUserAPI)

routerAPI.put("/users", putUpdateUserAPI)

routerAPI.delete("/users", deleteUserAPI)

module.exports = routerAPI