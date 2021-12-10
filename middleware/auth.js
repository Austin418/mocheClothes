const jwt = require('jsonwebtoken')
const { UnauthError } = require('../errors')

const auth = async (req, res, next) => {
  //check the header
  const authheader = req.headers.authorization
  if(!authheader || !authheader.startsWith('Bearer')) {
    throw new UnauthError('Not authorized to access this part of the site')
  }
  const token = authheader.split(' ')[1]
  try{
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = {userID: payload.userID, name: payload.name}
    next()
  }catch{
    throw new UnauthError("invalid authorization")
  }
}

module.exports = auth