import MenuService from '../services/MenuService.js';
import ErrorApi from '../ErrorApi/ErrorApi.js'

class MenuController{
    async create(req,res,next){
        try{
            const dish = await MenuService.create(req.body, req.files.image);
            res.json(dish);
        }catch(e){
            next(e)
        }
    }
    async getAll(req,res){
        try{
            const dishes = await MenuService.getAll();
            return res.json(dishes);
        }catch(e){
            next(e)
        }
    }
    async getByCategory(req,res,next){
        try{
            console.log(req.query)
            const {page =1, limit=3} = req.query;
            const pageNumber = parseInt(page);
            const limitNumber = parseInt (limit);
            const {totalItems, categoryDishes} = await MenuService.getByCategory(req.params.id, pageNumber, limitNumber);
            res.setHeader('x-total-count', totalItems);
            return res.json(categoryDishes);
        }catch(e){
            next(e)
        }
    }
    async getOne(req,res,next){
        try{
            const dish = await MenuService.getOne(req.params.id);
            return res.json(dish)
        }catch(e){
            next(e)
        }
    }
    async update(req,res,next){
        try{
            const updatedDish = await MenuService.update(req.body);
            return res.json(updatedDish);
        }catch(e){
            next(e)
        }
    }
    async delete(req,res,next){
        try{
            const dish = await MenuService.delete(req.params.id);
            return res.json(dish)
        }catch(e){
            next(e)
        }
    }
}

export default new MenuController();