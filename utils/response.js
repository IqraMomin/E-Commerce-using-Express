// SUCCESS RESPONSE
exports.sendResponse = (res, data, statusCode = 200) => {
    return res.status(statusCode).json({
      success: true,
      data
    });
  };
  
  // ERROR RESPONSE
  exports.sendErrorResponse = (res, { message, statusCode = 500 }) => {
    return res.status(statusCode).json({
      success: false,
      message
    });
  };