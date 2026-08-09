const User = require("../models/userModel")
const bcrypt = require("bcrypt")

exports.registerUser = async (userData) => {
    const { name, email, password, role } = userData

    const hashedPassword = await bcrypt.hash(password, 10)

    return await User.create({
        name,
        email,
        password: hashedPassword,
        role: "user"
    })
}