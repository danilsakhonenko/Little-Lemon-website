import Dish from "../models/Dish.js";
import FileService from "./FileService.js";
import ErrorApi from '../ErrorApi/ErrorApi.js'

class MenuService {
  async create(dish, image) {
    const fileName = FileService.saveFile(image);
    try {
      const createdDish = await Dish.create({ ...dish, image: fileName });
      return createdDish;
    } catch (e) {
      FileService.deleteFile(fileName);
      throw ErrorApi.badRequest('Unable to add an item: '+e.message)
    }
  }

  async getAll() {
    const dishes = await Dish.find();
    return dishes;
  }

  async getByCategory(category, page, limit) {
    const startIndex = (page - 1) * limit;
    const filter =
      category === "specials" ? { special: true } : { category: category };
    const totalItems = await Dish.countDocuments(filter);
    const categoryDishes = await Dish.find(filter)
      .skip(startIndex)
      .limit(limit);
    return {
      totalItems: totalItems,
      categoryDishes: categoryDishes,
    };
  }

  async getOne(id) {
    const dish = await Dish.findById(id);
    if(!dish)
      throw ErrorApi.badRequest('Unable to find an item')
    return dish;
  }
  async update(dish) {
    if (!dish._id) {
      throw ErrorApi.badRequest("ID is not specified");
    }
    const updatedDish = await Dish.findByIdAndUpdate(dish._id, dish, {
      new: true,
    });
    return updatedDish;
  }
  async delete(id) {
    const dish = await Dish.findByIdAndDelete(id);
    if(!dish)
      throw ErrorApi.badRequest('Unable to find an item')
    FileService.deleteFile(dish.image);
    return dish;
  }
}

export default new MenuService();
