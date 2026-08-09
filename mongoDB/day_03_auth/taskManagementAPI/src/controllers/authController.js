const authService = require("../services/authService")

exports.register = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body)

        res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        next(error)
    }
}