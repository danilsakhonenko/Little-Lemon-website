import { Router } from "express";
import MenuController from "./MenuController.js";

const router = new Router();

router.post('/dishes', MenuController.create)
router.get('/dishes', MenuController.getAll)
router.get('/dishes/categories/:category', MenuController.getByCategory)
router.get('/dishes/:id',MenuController.getOne)
router.put('/dishes/', MenuController.update)
router.delete('/dishes/:id', MenuController.delete)

export default router;