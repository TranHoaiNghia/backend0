const User = require('../models/user') //nghia
const { uploadSingleFile, uploadMultipleFiles } = require("../services/fileServices")

const getUsersAPI = async (req, res) => {
    let user = await User.find({})

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const postCreateUserAPI = async (req, res) => {
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

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userID = req.body.id

    let userUpdate = await User.updateOne({ _id: userID }, { email: email, name: name, city: city })

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

const postUpLoadSingleFileAPI = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    let result = await uploadSingleFile(req.files.image)

    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    } else {
        //upload single
        return await postUpLoadSingleFileAPI(req, res);
    }
}

module.exports = { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUpLoadSingleFileAPI, postUploadMultipleFilesAPI }