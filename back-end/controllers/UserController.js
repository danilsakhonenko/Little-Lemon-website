import UserService from "../services/UserService.js";

class UserController {
  async register(req, res, next) {
    try {
      const { email, username, password, role } = req.body;
      const tocken = await UserService.create(email, username, password, role);
      return res.json({ tocken });
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const tocken = await UserService.authorize(email, password);
      return res.json({ tocken });
    } catch (e) {
      next(e);
    }
  }
  async check(req, res, next) {
    const user = req.user;
    const tocken = UserService.updateJwt(user);
    return res.json({ tocken });
  }
}

export default new UserController();
