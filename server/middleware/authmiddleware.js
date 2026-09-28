// ------in this section use only middleware


const authMiddleware =(req,res,next)=>{

      const token =req.cookies.acc_token;
      console.log("token=>" , token);
      next()
    

}


module.exports={authMiddleware}