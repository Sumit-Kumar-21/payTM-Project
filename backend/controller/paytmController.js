import { checkSignUp, checkSignIn,checkUpdate } from "../zod/paytmZod";
import { User } from "../models/paytmModel";
import { JWT_SECRET } from "../JWT/config";
const jwt = require('jsonwebtoken');

const handleSignUpReq= async(req,res)=>{

    const body = req.body;
    // check the user input is valid or not
    const checked = checkSignUp.safeParse(body);
    if(!checked.sucess){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    // check the username already exist or not
    const isUserExist = await User.findOne({
        username: body.username
    })

    if(isUserExist){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    //create user and store in database
    const dbUser = await User.create({
        username: body.username,
        password: body.password,
        firstname: body.firstname,
        lastname: body.lastname
    })
    const userId = dbUser._id;

    //create jwt token
    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    return res.status(200).json({
        message: "User created successfully",
        token: token
    })
}

const handleSignInReq= async(req,res)=>{

    const body = req.body;
    //check the user input is valid or not
    const { sucess }= checkSignIn.safeParse(body); // zod always return an object which contain sucess and data that's why i use {sucess} to direct catch "true or false".
    if(!sucess){
        return res.status(411).json({
            message: "Invalid Input"
        })
    }

    // check user is exist or not
    const isUserExist = await User.findOne({
        username: body.username,
        password: req.body.password
    })
    
    if(!isUserExist){
        return res.status(411).json({
            message: "Invalid username or password"
        })
    }

    // retrive the userId from the existing user
    const userId = isUserExist._id;
    //create token
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    return res.status(400).json({
        message: 'Sign',
        token: token
    })

}

const handleModifyReq= async(req,res)=>{

    const body = req.body;
    // check the valid input
    const { sucess } = checkUpdate.safeParse(body);
    if(!sucess){
        return res.status(411).json({
            message: "Input isn't match the basic requirement"
        })
    }
    const userId = req.userId;
    await User.findByIdAndUpdate(userId, body);

    return res.status(200).json({
        message: "Update sucessfully"
    })
}

export const handleBulkreq = async(req,res)=>{
    //?filter=...
    const search = req.query.filter || "";

    const users = User.find({
        $or:[{
            firstname:{
                "$regex": search
            }
        },{
            lastname:{
                "$regex": search
            }
        }]
    })

    return res.json({
        user: users.map(user=>({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
}

export {
    handleModifyReq,
    handleSignInReq,
    handleSignUpReq,
    handleBulkreq
}