//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const {StatusCodes} = require('http-status-codes')
const CustomAPIError = require('./custom-error')
  
  
  class NotFoundError extends CustomAPIError{
  consttuctor (message){
  super(message)
  this.statusCode = StatusCodes.NOT_FOUND
  }
}

module.exports = NotFoundError