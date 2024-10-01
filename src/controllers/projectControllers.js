const { createProject } = require('../services/productServices')
const Project = require('../models/project')
const { getProject, patchProject, deleteProject, d_U_fromPServices } = require('../services/productServices')

const postCreateProject = async (req, res) => {
    let result = await createProject(req.body)
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const getAllProject = async (req, res) => {
    let result = await getProject(req.query)
    return res.status(200).json({
        er: 0,
        data: result
    })
}

const patchAllProject = async (req, res) => {
    // let = { id, name, endDate, description } = req.body

    let result = await patchProject(req.body)
    return res.status(200).json({
        er: 0,
        data: result
    })
}

const deleteAllProject = async (req, res) => {
    // let id = req.body.id
    const result = await deleteProject(req.body.id)
    return res.status(200).json({
        ec: 0,
        data: result
    })
}

const deleteUsersFromProject = async (req, res) => {
    const result = await d_U_fromPServices(req.body)
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

module.exports = { postCreateProject, getAllProject, patchAllProject, deleteAllProject, deleteUsersFromProject }