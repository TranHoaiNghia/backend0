const path = require('path')
const express = require('express')

const configViewEngine = (app) => {

    // config template view engine
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    // config static file: imgage/css/js
    app.use(express.static(path.join('./src', 'public')))


}

module.exports = configViewEngine;