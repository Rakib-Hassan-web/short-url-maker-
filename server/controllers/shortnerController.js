const shortnerSchema = require("../models/shortnerSchema")
const { sendError, sendSuccess } = require("../services/responseHandler")
const generateRandomString = require("../utils/generateRandomstr")
const { validateURL } = require("../utils/validation")


const shortUrlcreate = async(req,res)=>{
   
    const {longUrl} =req.body

    if(!longUrl) return sendError(res , "Url is required" ,400)
    if(!validateURL(longUrl)) return sendError(res , " Enter a valid Url" ,400)

        const shortUrl =generateRandomString()

      


        await urlData.save()


        
        sendSuccess(res , urlData)

}


module.exports={shortUrlcreate}