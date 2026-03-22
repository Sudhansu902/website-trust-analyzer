import { Router } from "express";
import { checkWebsiteTrust } from "../controllers/checkController.js";

const router = Router();

router.post("/check", checkWebsiteTrust);

export default router;
