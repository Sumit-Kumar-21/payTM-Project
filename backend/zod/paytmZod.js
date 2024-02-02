const zod = require("zod");

const checkSignUp = zod.object({
    username: zod.string().email().min(5),
    password: zod.string().min(6),
    firstname: zod.string().max(10),
    lastname: zod.string().max(10)
})

const checkSignIn = zod.object({
    username: zod.string().email().min(5),
    password: zod.string().min(6),
})

const checkUpdate = zod.object({
    password: zod.string().min(6),
    firstname: zod.string().max(10),
    lastname: zod.string().max(10)
})

module.exports={
    checkSignIn,
    checkSignUp,
    checkUpdate
}