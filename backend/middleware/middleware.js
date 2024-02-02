const { JWT_SECRET } = require("../JWT/config") ;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next)=>{

    const authHeader = req.headers.authorization;
    if(!authHeader.startsWith('Bearer ')){
        return res.status(411).json({
            message:'Invalid Token'
        })
    }
    const token = authHeader.split(" ")[1];
    try {
        const decode= jwt.verify(token, JWT_SECRET)

        if(decode.userId){

            req.userId = decode.userId;
            next();
        }else{
            return res.status(403).json({});
        }
        
    } catch (error) {
        return res.status(403).json({message: error});
    }
}

module.exports= {
    authMiddleware
}