const zod = reqioer("zod");

export const checkSignUp = zod.object({
    username: zod.string().email().min(5).max(20),
    password: zod.string().min(6),
    firstname: zod.string().max(10),
    lastname: zod.string().max(10)
})

export const checkSignIn = zod.object({
    username: zod.string().email().min(5).max(20),
    password: zod.string().min(6),
})

export const checkUpdate = zod.object({
    password: zod.string().min(6),
    firstname: zod.string().max(10),
    lastname: zod.string().max(10)
})