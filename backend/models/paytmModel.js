import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        trim: true
    },

    password: {
        typer: String,
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

export const User = mongoose.model("Users", userSchema);

const accountSchema = mongoose.Schema({
    userId:{
        typer: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
})
export const account = mongoose.model("account", accountSchema)