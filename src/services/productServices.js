const Project = require('../models/project')
const Task = require('../models/task')
const aqp = require('api-query-params')

module.exports = {
    createProject: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data)
            return result
        }
        if (data.type === "ADD-USERS") {
            console.log('check data: ', data)
            const myProject = await Project.findById(data.projectID).exec()

            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.usersInfor.push(data.usersArr[i])
            }

            let newResult = await myProject.save()

            console.log(myProject)
            return newResult
        }
        if(data.type === "ADD-TASKS"){
            console.log(">>>check data task: ", data)
            const myProject = await Project.findById(data.projectID).exec()

            for(let i = 0; i < data.tasksArr.length; i++){
                myProject.tasks.push(data.tasksArr[i])
            }
            
            const result = await myProject.save()

            return result
        }
    },

    getProject: async (queryString) => {
        let page = queryString.page

        let { filter, limit, population } = aqp(queryString)
        console.log('check filter: ', filter)
        delete filter.page
        console.log('check filter: ', filter)

        let skip = (page - 1) * limit
        let result = await Project.find(filter)
            .populate(population)
            .skip(skip)
            .limit(limit)
            .exec()

        return result
    },

    patchProject: async (data) => {
        try {
            let result = await Project.updateOne({ _id: data.id }, { ...data })
            return result
        } catch (error) {
            console.log('error: ', error)
        }

    },

    deleteProject: async (id) => {
        try {
            const result = await Project.deleteById(id)
            console.log('>>result', result)
            return result

        } catch (error) {
            console.log('error', error)
        }
    },

    d_U_fromPServices: async (data) => {
        try {
            if (data.type === "REMOVE-USERS") {
                const myProject = await Project.findById(data.projectId).exec()
                
                for(let i = 0; i < data.usersArr.length; i++){
                    myProject.usersInfor.pull(data.usersArr[i])
                }
                
                let result = await myProject.save()
                return result
            }
        } catch (error) {
            console.log('error: ', error)
        }

    }
}