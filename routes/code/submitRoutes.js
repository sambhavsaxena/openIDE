import express from "express";
import codeController from "../../controllers/code.js";
const router = express.Router();

router.route("/code").post(codeController);

export default router;
