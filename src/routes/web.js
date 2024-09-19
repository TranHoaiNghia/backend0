const express = require('express')
const router = express.Router()

const {getHomePage, getAbc, getHoiDanIT} = require('../controllers/homeControllers')

//khai báo route
// router.Method('/route', handler)
router.get('/', getHomePage)

router.get('/abc', getAbc)

router.get('/hoidanIT', getHoiDanIT)

module.exports = router