const express = require('express')
const router = express.Router()

const {getHomePage, getAbc, getHoiDanIT, postCreateUser, getCreatePage} = require('../controllers/homeControllers')

//khai báo route
// router.Method('/route', handler)
router.get('/', getHomePage)

router.get('/abc', getAbc)

router.get('/hoidanIT', getHoiDanIT)

router.post('/create-user', postCreateUser)

router.get('/create', getCreatePage)


module.exports = router