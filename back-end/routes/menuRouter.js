import { Router } from "express";
import MenuController from "../controllers/MenuController.js";
import RoleCheck from "../middlewares/RoleCheck.js";

const router = new Router();

router.post('/', RoleCheck('ADMIN'), MenuController.create)
router.get('/', MenuController.getAll)
router.get('/categories/:id', MenuController.getByCategory)
router.get('/:id',MenuController.getOne)
router.put('/',RoleCheck('ADMIN'), MenuController.update)
router.delete('/:id',RoleCheck('ADMIN'), MenuController.delete)

export default router;