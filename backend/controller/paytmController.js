const { checkSignUp, checkSignIn,checkUpdate } = require("../zod/paytmZod");
const { Account, User } = require("../models/paytmModel");
const { JWT_SECRET } = require("../JWT/config");
const jwt = require('jsonwebtoken');

const handleSignUpReq= async(req,res)=>{

    const body = req.body;
    // check the user input is valid or not
    const checked = checkSignUp.safeParse(body);
    if(!checked.success){
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
    }, JWT_SECRET);

    res.setHeader('Authorization', `Bearer ${token}`)

    await Account.create({
        userId: userId,
        balance: 1+ Math.floor(Math.random()*1000)
    });

    res.status(200).json({
        message: "User created successfully",
        token: token
    })
}

const handleSignInReq= async(req,res)=>{

    const body = req.body;
    //check the user input is valid or not
    const { success }= checkSignIn.safeParse(body); // zod always return an object which contain success and data that's why i use {success} to direct catch "true or false".
    if(!success){
        return res.status(411).json({
            message: "Invalid Input"
        })
    }

    // check user is exist or not
    const isUserExist = await User.findOne({
        username: body.username,
        password: body.password
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
    }, JWT_SECRET);
    
    res.setHeader('Authorization', `Bearer ${token}`);

    return res.status(400).json({
        message: 'Sign in',
        token: token
    })

}

const handleModifyReq= async(req,res)=>{

    const body = req.body;
    // check the valid input
    const { success } = checkUpdate.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Input isn't match the basic requirement"
        })
    }
    const userId = req.userId;
    await User.findByIdAndUpdate(userId, body);

    return res.status(200).json({
        message: "Update successfully"
    })
}

const handleBulkreq = async(req,res)=>{
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

module.exports = {
    handleModifyReq,
    handleSignInReq,
    handleSignUpReq,
    handleBulkreq
}