const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
    masg: err.message || "something went wrong try again later",
  };

  if (err.name === "ValidationError") {
    customError.msg = object
      .values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `entered user ${Object.keys(
      err.keyValue
    )}, already exists: ${Object.values(
      err.keyValue
    )}, please enter a new ${object.keys(err.keyValue)}`;
    customError.statusCode = 400;
  }
  if (err.name === "castError") {
    customError.msg = `no item found with id: ${err.value}`;
  }
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;