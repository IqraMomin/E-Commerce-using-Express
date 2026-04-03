const { sendErrorResponse, sendResponse } = require('../utils/response');

const getAllUsers = (req, res, next) => {
    
    res.send(`Fetching all users`)
}
const addUser = (req,res)=>{
    res.send("Adding a new user");
}

const getUserById = (req,res)=>{
    const user = req.params.id;
    if (user<10) {
        return sendErrorResponse(res, {
          message: 'User not found',
          statusCode: 404
        });
  
      }
      return sendResponse(res, user, 200);
    
}

module.exports = {
    getAllUsers,addUser,getUserById
}