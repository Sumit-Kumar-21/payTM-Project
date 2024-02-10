const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { handleBulkreq, handleModifyReq, handleSignInReq, handleSignUpReq, handleGetUserreq } = require("../controller/paytmController");

const router = express.Router();

router.get("/get", authMiddleware, handleGetUserreq)

router.post("/signup", handleSignUpReq)

router.post("/signin", handleSignInReq)

router.put("/modify", authMiddleware, handleModifyReq)

router.get("/bulk", handleBulkreq)

module.exports=router;