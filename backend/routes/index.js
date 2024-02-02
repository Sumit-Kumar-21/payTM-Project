const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

console.log("enter here");
// userRouter middleware
router.use("/user", userRouter);
router.use("/account", accountRouter);


module.exports= router;