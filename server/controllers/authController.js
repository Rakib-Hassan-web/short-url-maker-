const userSchema = require("../models/userSchema")
const { sendError, sendSuccess } = require("../services/responseHandler")
const { validateEmail, validatePassword } = require("../utils/validation")

// -------------reg----------------
const registration  = async(req,res)=>{

   try {
     const { fullName ,email,password} =req.body

    if(!fullName) return sendError(res , "fullName is required" ,400)
    if(!email) return sendError(res , "email is required" ,400)
    if(!validateEmail(email)) return sendError(res , "enter a valid email address" ,400)
    if(!password) return sendError(res , "password is required" ,400)
    if(!validatePassword(password)) return sendError(res , " enter a valid password" ,400)


        const existingUser = await userSchema.findOne({email})

        if(existingUser) return sendError(res , "user already exist" ,400)

            const newuser =  new userSchema({
                fullName,
                email,
                password
            })

            await newuser.save()


        sendSuccess(res , "User Register Sucessfull" ,201)
    
   } catch (error) {

    sendError(res , "Server Error" ,500)
    console.log(error);
    
   }

    

}



// -------------login----------------


const login  =(req,res)=>{
   
    try {
        const {email ,password} =req.body


         if(!email) return sendError(res , "email is required" ,400)
         if(!validateEmail(email)) return sendError(res , "enter a valid email address" ,400)
         if(!password) return sendError(res , "password is required" ,400)
         if(!validatePassword(password)) return sendError(res , " enter a valid password" ,400)

        
    } catch (error) {
        console.log(error);
        
    }

}

module.exports={registration ,login}