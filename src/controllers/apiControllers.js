const User = require('../models/user')

const getUsersAPI = async (req, res) => {
    let user = await User.find({})

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const postCreateUserAPI = async (req, res) =>{
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    let user = await User.create({
        email,
        name,
        city
    })

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req,res) =>{
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userID = req.body.id

    let userUpdate = await User.updateOne({ _id: userID }, {email: email, name: name, city: city})

    return res.status(200).json({
        errorCode: 0,
        data: userUpdate
    })
}

const deleteUserAPI = async (req, res) => {
    const userID = req.body.id

    let result = await User.deleteOne({
        _id: userID
    })

    return res.status(200).json({
        errorCode: 0,
        data: result
    })

}

module.exports ={getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI}