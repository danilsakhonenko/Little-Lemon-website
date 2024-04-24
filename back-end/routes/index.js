import { Router } from "express";
import menuRouter from "./menuRouter.js";
import userRouter from "./userRouter.js";

const router = new Router();

router.use('/menu', menuRouter)
router.use('/user', userRouter)

export default router;