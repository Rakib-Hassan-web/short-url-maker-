const shortnerSchema = require("../models/shortnerSchema")
const { sendError, sendSuccess } = require("../services/responseHandler")
const generateRandomString = require("../utils/generateRandomstr")
const { validateURL } = require("../utils/validation")


const shortUrlcreate = async(req,res)=>{
   
    const {longUrl} =req.body

    if(!longUrl) return sendError(res , "Url is required" ,400)
    if(!validateURL(longUrl)) return sendError(res , " Enter a valid Url" ,400)

        const shortUrl =generateRandomString()

        const urlData = new shortnerSchema({
            longUrl,
            shortUrl
        })


        await urlData.save()


        
        sendSuccess(res , { longUrl,shortUrl,},201)

}

const redirectToUrl = async (req,res)=>{

    const params = req.params

    if(!params.id) return sendError(res , "No  Valid url" ,400)


    const urlData = await shortnerSchema.findOne({shortUrl : params.id})


    // sendSuccess.redirect(res,  urlData ,200)

    res.redirect(urlData.longUrl)
    
}


module.exports={shortUrlcreate,redirectToUrl}