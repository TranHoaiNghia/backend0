const { uploadSingleFile, uploadMultipleFiles } = require("../services/fileServices")
const { createCustomerServices, createCustomerArrayServices,
    getAllCustomerServices, updateCustomerServices,
    deleteACustomerServices, deleteManyCustomersServices } = require('../services/CustomersServices')

const Customers = require('../models/customer')

const postCreateCustomers = async (req, res) => {
    let { name, address, phone, email, description } = req.body

    let imageUrl = " "

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    let result = await uploadSingleFile(req.files.image)
    console.log('result: ', result)
    imageUrl = result.path


    let customerData = { name, address, phone, email, description, image: imageUrl }
    let customer = await createCustomerServices(customerData)


    return res.status(200).json({
        EC: 0,
        data: customer
    })

}

const postCreateArrayCustomers = async (req, res) => {
    let customers = await createCustomerArrayServices(req.body.customers)

    if (customers) {
        return res.status(200).json({
            er: 0,
            data: customers
        })
    }
    else {
        return res.status(200).json({
            er: -1,
            data: customers
        })
    }
}

const getAllCustomers = async (req, res) => {
    let limit = req.query.limit
    let page = req.query.page
    let name = req.query.name
    let address = req.query.address

    let result = null
    if (limit && page ) {
        result = await getAllCustomerServices(limit, page, req.query)
    }
    else {
        result = await getAllCustomerServices()
    }
    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const patchCustomers = async (req, res) => {

    let { id, name, email } = req.body
    let customerData = { id, name, email, }

    const customerUpdate = await updateCustomerServices(customerData)
    return res.status(200).json({
        EC: 0,
        data: customerUpdate
    })

}

const deleteACustomer = async (req, res) => {
    let id = req.body.id
    let deleteCustomer = await deleteACustomerServices(id)
    console.log("check: ", deleteCustomer)
    return res.status(200).json({
        EC: 0,
        data: deleteCustomer
    })
}

const deleteManyCustomers = async (req, res) => {

    let deleteCustomers = req.body.customersDelete

    let result = await deleteManyCustomersServices(deleteCustomers)
    if (result) {
        res.status(200).json({
            EC: 0,
            data: result
        })
    }
    else {
        res.status(400).json({
            Error: 1,

        })
    }
}

module.exports = { postCreateCustomers, postCreateArrayCustomers, getAllCustomers, patchCustomers, deleteACustomer, deleteManyCustomers }