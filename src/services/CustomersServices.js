const Customer = require('../models/customer')
const Customers = require('../models/customer')

const aqp = require('api-query-params')

const createCustomerServices = async (customerData) => {
    try {
        let customer = await Customers.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            image: customerData.image,
            description: customerData.description
        })
        return customer

    } catch (error) {
        console.log("Error: ", error)
    }
}

const createCustomerArrayServices = async (arr) => {
    try {
        let customers = await Customers.insertMany(arr)
        return customers
    } catch (error) {
        console.log('error: ->>', error)
        return null
    }
}

const getAllCustomerServices = async (limit, page, queryString) => {
    try {
        let result = null
        if (limit && page) {
            let skip = (page - 1) * limit

            const { filter } = aqp(queryString);
            delete filter.page

            console.log('check filter: ', filter)

            result = await Customer.find(filter).skip(skip).limit(limit).exec()

            // if (name && address) {
            //     result = await Customer.find(
            //         { "name": { $regex: '.*' + name + '.*' }, "address": { $in: ["hcm", "ha noi", "vung tau"]} }
            //     ).skip(skip).limit(limit)
            // }
            // else {
            //     result = await Customer.find({}).skip(skip).limit(limit)
            // }
        }
        else {
            result = await Customers.find({})
        }
        return result

    } catch (error) {
        console.log("Error: ", error)
        return null
    }


}

const updateCustomerServices = async (customerData) => {
    try {
        const customer = await Customer.updateOne({ _id: customerData.id }, { name: customerData.name, email: customerData.email })
        return customer
    } catch (error) {
        console.log("err0r: ", error)
        return null
    }
}

const deleteACustomerServices = async (id) => {
    try {
        const customer = await Customer.deleteById({ _id: id })
        return customer
    } catch (error) {
        console.log("err0r: ", error)
        return null
    }
}

const deleteManyCustomersServices = async (arr) => {

    try {
        let deleteCustomers = await Customers.delete({ _id: { $in: arr } })
        return deleteCustomers
    } catch (error) {
        console.log('Error: ', error)
    }
}

module.exports = {
    createCustomerServices, createCustomerArrayServices, getAllCustomerServices,
    updateCustomerServices, deleteACustomerServices, deleteManyCustomersServices
}