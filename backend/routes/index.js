import express from "express";
import userRouter from "./user"

const app = express();
const router = express.Router();

// userRouter middleware
app.use("/user", userRouter)


export default router;