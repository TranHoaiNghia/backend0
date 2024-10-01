const {createTasks, getTasks, putTasks, deleteTasks} = require('../services/taskServices')

module.exports = {
    postCreateTask: async (req, res) => {
        const result = await createTasks(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getAllTask: async(req, res) =>{
        const result = await getTasks(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    updateTask: async (req, res) => {
        const result = await putTasks(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteTask: async (req, res) => {
        const result = await deleteTasks(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }

}