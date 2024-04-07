import Dish from "./Dish.js";
import FileService from "./FileService.js";

class MenuService {
  async create(dish, image) {
    const fileName = FileService.saveFile(image);
    const createdDish = await Dish.create({...dish, image:fileName});
    return createdDish;
  }
  async getAll() {
    const dishes = await Dish.find();
    return dishes;
  }
  
  async getByCategory(category, page, limit) {
    const startIndex = (page - 1) * limit;
    const filter = category==='specials' ? {special:true} : {category: category};
    const totalItems = await Dish.countDocuments(filter);
    const categoryDishes = await Dish.find(filter).skip(startIndex).limit(limit);
    return {
      totalItems: totalItems,
      categoryDishes: categoryDishes
    };
  }
  async getOne(id) {
    if (!id) {
      throw new Error("ID is not specified");
    }
    const dish = await Dish.findById(id);
    return dish;
  }
  async update(dish) {
    if (!dish._id) {
      throw new Error("ID is not specified");
    }
    const updatedDish = await Dish.findByIdAndUpdate(dish._id, dish, {
      new: true,
    });
    return updatedDish;
  }
  async delete(id) {
    if (!id) {
      throw new Error("ID is not specified");
    }
    const dish = await Dish.findByIdAndDelete(id);
    return dish;
  }
}

export default new MenuService();
