import User from "../models/User.js";
import FileService from "./FileService.js";
import ErrorApi from "../ErrorApi/ErrorApi.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateJwt = (id, email, username, role) => {
  return jwt.sign({ id, email, username, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserService {
  async create(email, username, password, role) {
    if (!email || !username || !password) {
      throw ErrorApi.badRequest("Invalid email, username or password");
    }
    const candidate = await this.getOne(email);
    if (candidate) {
      throw ErrorApi.badRequest(
        "There is already an account with this email address"
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const profilePic= FileService.getPath("defaultUserPic.png")
    const user = await User.create({ email, username, password: hashPassword, role, image: profilePic});
    const token = generateJwt(user.id, user.email, user.username, user.role);
    return token;
  }

  async authorize(email,password) {
    const user = await this.getOne(email)
    if (!user) {
      throw ErrorApi.badRequest('User is not found')
    }
    const comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      throw ErrorApi.badRequest('Incorrect password')
    }
    const token = generateJwt(user.id, user.email, user.username, user.role)
    return token;
  }

  updateJwt(user){
    const tocken = generateJwt(user.id, user.email, user.username, user.role)
    return tocken;
  }

  async getOne(email) {
    const user = await User.findOne({ email });
    return user;
  }
}
export default new UserService();
