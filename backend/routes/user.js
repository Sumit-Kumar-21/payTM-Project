import { Router } from "express";
import { authMiddleware } from "../middleware/middleware";
import { handleBulkreq, handleModifyReq, handleSignInReq, handleSignUpReq } from "../controller/paytmController";

const router = Router();

router.post("/signup", handleSignUpReq)

router.post("/signin", handleSignInReq)

router.put("/modify", authMiddleware, handleModifyReq)

router.get("/bulk", handleBulkreq)

export default router;