function errHandler(error, req, res, next) {
  let statusCode = 500;
  let message = "Internal Server Error";
  console.log(error);
  if (error.name === "SequelizeValidationError") {
    statusCode = 400;
    message = error.errors[0].message;
  } else if (error.name === "SequelizeUniqueConstraintError") {
    statusCode = 400;
    message = error.errors[0].message;
  } else if (error.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "You need to login first";
  } else if (error.name === "SequelizeDatabaseError") {
    statusCode = 400;
    message = "Invalid input type";
  } else if (error.name === "SequelizeForeignKeyConstraintError") {
    statusCode = 400;
    message = "Invalid input type";
  } else if (error.name === "notFound") {
    statusCode = 404;
    message = error.msg
  } else if (error.name === "notAuthorized") {
    statusCode = 403;
    message = "You are not authorized to access this page";
  } else if (error.name === "notAuthenticated") {
    statusCode = 401;
    message = "You need to login first";
  } else if (error.name === "incorrectLogin") {
    statusCode = 401;
    message = "Invalid email or password";
  }
  res.status(statusCode).json({ message });
}
module.exports = errHandler;
