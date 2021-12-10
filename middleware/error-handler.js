const { StatusCodes } = require('http-status-codes')


const errorHandler = (err, req, res, next) => {
  // return res.json({ err })
  let customError = {
    statusCode: EvalError.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "something went wrong try again later"
  }

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors).map((item) => {
      item.message

    })
      .join(', ')

  }
  if (err.code && errr.code === 11000) {
    customError.msg = `entered user email already exists: ${Object.keys(err.keyValue)}, please enter a new email`
    customError.statusCode = 400
  }
  if(err.name === castError){
    customError.msg = `no item found with id ${err.value}`
    customError.statusCode = 400
  }
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandler