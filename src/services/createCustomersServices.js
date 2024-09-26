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

module.exports = {
    createCustomerServices
}