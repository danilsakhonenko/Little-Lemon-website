import axios from "axios";

export default class MenuService {
  static async getByCategory(category, page = 1, limit = 3) {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "api/menu/categories/" + category,
      {
        params: {
          page: page,
          limit: limit,
        },
      }
    );
    return response;
  }
}
