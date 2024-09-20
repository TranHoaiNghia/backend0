const connection = require('../config/database')
const getHomePage = (req, res) => {
    let user = []

    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            user = results
            console.log('Check home page = ', results)
            // console.log('Check user: ', user)
            res.send(JSON.stringify(user))
        }
    )
}

const getAbc = (req, res) => {
    res.send("Check success Abc, test nodemon123")
}

const getHoiDanIT = (req, res) => {
    // res.send('<h1>Hoi dan It</h1>')
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getAbc, getHoiDanIT
}