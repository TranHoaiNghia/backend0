const { uploadSingleFile, uploadMultipleFiles } = require("../services/fileServices")
const {createCustomerServices} = require('../services/createCustomersServices')

const postCreateCustomers = async (req, res) => {
    let { name, address, phone, email, description } = req.body

    let imageUrl = " "

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    let result = await uploadSingleFile(req.files.image)
    imageUrl = result.path


    let customerData = {name, address, phone, email, description, image: imageUrl}
    let customer = await createCustomerServices(customerData)

    
    return res.status(200).json({
        EC: 0,
        data: customer
    })
        
}

module.exports = { postCreateCustomers }