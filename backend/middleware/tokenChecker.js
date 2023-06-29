
const jwt = require('jsonwebtoken')

const tokenchecker =(req,res,next)=>{
    const token = req.headers.authorization
    
        const decodedata = jwt.decode(token,"arzit");
        if(decodedata)
        {
            next();
        }
        else
        {
            res.send("invalid")
        }

        
  


}

module.exports=tokenchecker

