const User = require("../models/userModel")

exports.getUserById = async (id) => {
    return await User.findById(id)
}

exports.getUser = async() => {
    return await User.find()

}