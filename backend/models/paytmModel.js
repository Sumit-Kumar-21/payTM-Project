const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 5,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minLength: 6,
    },

    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 10
    },

    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 10
    }
})

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
})

const Account = mongoose.model("Account", accountSchema)
const User = mongoose.model("Users", userSchema);

module.exports= {
    Account,
    User
}