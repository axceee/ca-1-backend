import { createUser,getUser } from "../controllers/user.controllers.js";
import { Router } from "express";

const router = Router()

router.post('/create',createUser)
router.get('/find',getUser)

export default router