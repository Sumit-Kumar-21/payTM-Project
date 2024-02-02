const mongoose = require("mongoose");
const { Account } = require("../models/paytmModel");

const handleBalanceGetreq = async(req, res)=>{

    
    const account = await Account.findOne({
        userId: req.userId
    });

    const balance = account.balance;

    return res.status(200).json({
        balance: account.balance
    });

}

const handleTrasnferreq = async (req,res)=>{

    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount , to } = req.body;

    // finding user account data from database from which the balance deducted
    const userAccount = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!userAccount || userAccount.balance< amount){
        // (await session).abortTransaction();
        await session.abortTransaction();
        return res.status(400).json({
            message:"Insufficient balance"
        })
    }

    // finding the user account to which the amount will send
    const toAccount = await Account.findOne({
        userId: to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Account"
        })
    }

    if(to==userAccount.userId){
        await session.abortTransaction();
        return res.status(400).json({
            message: "sender and receiver account are same"
        })
    }

    //Transaction start
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount} }).session(session);

    // commit Transaction
    await session.commitTransaction();

    return res.status(200).json({
        message: "Transaction Successfull"
    })

}

module.exports = {
    handleBalanceGetreq,
    handleTrasnferreq
}