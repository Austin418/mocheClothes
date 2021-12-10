const jwt = require('jsonwebtoken')
require('dotenv').config()

const { UnauthError } = require('../errors')

const auth = async(req, res, next) => {
    const authHeader = req.headers.authorization 
    if (!authHeader ||authHeader.startsWith("Bearer")) {
        throw new UnauthError("Not authorized to access this part of the site")
    } 
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log(payload)
        req.user = { userID: payload.userID, name: payload.name }
        next()
    } catch (err) {
        throw new UnauthError('authorization invalid')
    }
}

module.exports = auth