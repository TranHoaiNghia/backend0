const connection = require('../config/database')
const {getAllUser} = require('../services/CRUDServices')
const getHomePage = async (req, res) => {

    let results = await getAllUser()
    console.log('>>RESULTS GETALLUSERS: ', results)
    return res.render('home.ejs', {listUser: results}) // x <- y
}

const getAbc = (req, res) => {
    res.send("Check success Abc, test nodemon123")
}

const getHoiDanIT = (req, res) => {
    // res.send('<h1>Hoi dan It</h1>')
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    console.log('email: ', email, 'name: ', name, 'city: ', city)

    // connection.query(
    //     `INSERT INTO Users 
    //     (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results){

    //         console.log('test results in connection12: ',results)
    //         res.send('Create a new users success!')
    //     }
    // )


    let [results, fields] = await connection.query(
        `INSERT INTO Users 
        (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
    )

    console.log('CHECK RESULT: ', results)
    res.send('Create a new users success!')



    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         console.log('Check results: ', results)
    //     }
    // )


    // const [results, fields] = await connection.query('select * from Users u')
    // console.log('check results123: ', results)
    // res.send('Render all information success!!!')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomePage, getAbc, getHoiDanIT, postCreateUser, getCreatePage
}