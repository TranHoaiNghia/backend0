const connection = require('../config/database')
const { use } = require('../routes/web')
const {getAllUser, getUserById, updateUserById, deleteUserById} = require('../services/CRUDServices')

const User = require('../models/user')

const getHomePage = async (req, res) => {

    let results = []
    // console.log('>>RESULTS GETALLUSERS: ', results)
    return res.render('home.ejs', {listUser: results}) // x <- y
}

const getAbc = (req, res) => {
    res.send("Check success Abc, test nodemon123")
}

const getHoiDanIT = (req, res) => {
    // res.send('<h1>Hoi dan It</h1>')
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    
    let userID = req.params.id

    let user = await getUserById(userID)

    res.render('edit.ejs', {userEdit: user})
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


    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users 
    //     (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    // )

    // console.log('CHECK RESULT: ', results)
    // res.send('Create a new users success!')



    // const userSave = new User({
    //     name: name,
    //     email: email,
    //     city: city
    // })

    // userSave.save()



    await User.create({
        name: name,
        email: email,
        city: city
    })

    res.send('Creat a user in Mongoose sucess!')

}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userId = req.body.id

    console.log('email: ', email, 'name: ', name, 'city: ', city, 'userId: ', userId)


    await updateUserById(email, name, city, userId)

    // console.log('CHECK RESULT: ', results)
    res.redirect('/')



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

const postDeleteUser = async (req, res) => {
    let userID = req.params.id

    let user = await getUserById(userID)

    res.render('delete.ejs', {userEdit: user})
}

const postHandleRemoveUser = async (req, res) => {
    let userID = req.body.id

    await deleteUserById(userID)    

    res.redirect('/')
}

module.exports = {
    getHomePage, getAbc, getHoiDanIT, getCreatePage, postCreateUser, 
    getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser, deleteUserById
}