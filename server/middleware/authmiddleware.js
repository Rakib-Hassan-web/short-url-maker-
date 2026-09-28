// ------in this section use only middleware

const { verifyToken, generateAccTkn } = require("../utils/token");


const authMiddleware =(req,res,next)=>{

    try {
        const token =req.headers.acc_token;
        const decoded =verifyToken(token)
        req.user= decoded

        console.log(decoded);
        

        next()
        const decoded =generateAccTkn(token)
    
      
    } catch (error) {
      next()
    }

}


module.exports={authMiddleware}