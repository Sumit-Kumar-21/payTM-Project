const express = require("express");
const { handleBalanceGetreq, handleTrasnferreq } = require("../controller/balanceControl");
const { authMiddleware } = require("../middleware/middleware");

const router = express.Router();

router.get('/balance', authMiddleware, handleBalanceGetreq);
router.post('/transfer', authMiddleware, handleTrasnferreq);

module.exports = router;