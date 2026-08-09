const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        const error = new Error("Authentication token is required")
        error.statusCode = 401
        return next(error)
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()
    } catch (error) {
        const authError = new Error("Invalid or expired token")
        authError.statusCode = 401
        next(authError)
    }
}

module.exports = authMiddleware