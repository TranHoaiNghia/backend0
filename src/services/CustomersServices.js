const Customer = require('../models/customer')
const Customers = require('../models/customer')

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

const getAllCustomerServices = async (req, res) => {
    try {
        let customer = await Customers.find({})
        return customer

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
    createCustomerServices, createCustomerArrayServices, getAllCustomerServices, updateCustomerServices, deleteACustomerServices, deleteManyCustomersServices
}