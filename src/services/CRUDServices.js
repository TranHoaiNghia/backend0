const connection = require('../config/database')

const getAllUser = async () => {
    let = [results, fields] = await connection.query("Select * from Users")
    return results
}

const getUserById = async (userID) => {

    let [results, fields] = await connection.query('Select * from Users where id = ?', [userID])
    // console.log('Check results123: ', results)

    const user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users set email = ?, name = ?, city = ? WHERE id = ?`,
        [email, name, city, userId]
    )

}

const deleteUserById = async (userID) => {
    let [results, fields] = await connection.query(`Delete from Users Where id = ?`, [userID])
}

module.exports = {
    getAllUser, getUserById, updateUserById, deleteUserById
}