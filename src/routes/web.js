const express = require('express')
const router = express.Router()

const {getHomePage, getAbc, getHoiDanIT, getCreatePage, 
    postCreateUser,  getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser} = require('../controllers/homeControllers')

//khai báo route
// router.Method('/route', handler)
router.get('/', getHomePage)

router.get('/abc', getAbc)

router.get('/hoidanIT', getHoiDanIT)

router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)

router.post('/delete-user', postHandleRemoveUser)

module.exports = router