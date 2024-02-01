import { JWT_SECRET } from "../JWT/config";
const jwt = require("jsonwebtoken");

export const authMiddleware = (req, res, next)=>{

    const authHeader = req.headers.authorization;
    if(!authHeader.startWith('Bearer ')){
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