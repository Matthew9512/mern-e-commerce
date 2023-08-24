const errorHandler = (err, req, res, next) => {
   const code = err.statusCode || 404;
   const message = `There was an internal error, please try again later`;
   console.log(err);
   res.status(code).json({ message: message });
};

module.exports = errorHandler;
