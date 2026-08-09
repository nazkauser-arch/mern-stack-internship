const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
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

exports.loginUser = async (email, password) => {
    const user = await User.findOne({email})

    if (!user) {
        const error = new Error("Invalid email or password")
        error.statusCode = 401
        throw error
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        const error = new Error("Invalid email or password")
        error.statusCode = 401
        throw error
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )

    return {
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }, token
    }
}