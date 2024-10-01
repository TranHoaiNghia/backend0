const Task = require('../models/task')
const aqp = require('api-query-params')

module.exports = {
    createTasks: async (data) => {
        try {
            if (data.type === "EMPTY-TASK") {
                const result = await Task.create({ ...data })
                return result
            }

            // if(data.type === "ADD-USER-TASK"){
            //     console.log('data: ', data)
            //     const myTask = await Task.findById(data.taskID).exec()

            //     myTask.usersInfo.push(data.userID)
            // }
        } catch (error) {
            console.log('error: ', error)
        }
    },
    getTasks: (queryString) => {
        try {
            let page = queryString.page
            
            const { filter, limit } = aqp(queryString)
            delete filter.page

            let skip = (page - 1) * limit

            const result = Task.find(filter).skip(skip).limit(limit)

            return result
        } catch (error) {
            console.log('error: ', error)
        }
    },

    putTasks: (data) => {
        try {
            const result = Task.updateOne({ _id: data.id }, { ...data })
            return result
        } catch (error) {
            console.log('error: ', error)
        }
    },

    deleteTasks: (data) => {
        try {
            const result = Task.deleteById(data.id)
            return result
        } catch (error) {
            console.log('error: ', error)
        }
    }
}