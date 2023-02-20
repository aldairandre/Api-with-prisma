import { Router } from "express";
import { msg }  from "../controllers/welcome-controllers.js";

const router = Router();

router.get("/",msg);

export default router;