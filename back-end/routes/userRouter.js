import { Router } from "express";
import UserController from "../controllers/UserController.js";
import Authorization from "../middlewares/Authorization.js";

const router = new Router();

router.post('/registration', UserController.register)
router.post('/login', UserController.login)
router.get('/auth', Authorization, UserController.check)

export default router;