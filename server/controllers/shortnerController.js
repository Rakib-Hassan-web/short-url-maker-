const shortnerSchema = require("../models/shortnerSchema")
const { sendError, sendSuccess } = require("../services/responseHandler")
const generateRandomString = require("../utils/generateRandomstr")
const { validateURL } = require("../utils/validation")


const shortUrlcreate = async(req,res)=>{
   
    



        sendSuccess(res , urlData)

}


module.exports={shortUrlcreate}