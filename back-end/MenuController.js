import MenuService from './MenuService.js';

class MenuController{
    async create(req,res){
        try{
            const dish = await MenuService.create(req.body, req.files.image);
            res.json(dish);
        }catch(e){
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try{
            const dishes = await MenuService.getAll();
            return res.json(dishes);
        }catch(e){
            res.status(500).json(e)
        }
    }
    
    async getByCategory(req,res){
        try{
            console.log(req.query)
            const {page =1, limit=3} = req.query;
            const pageNumber = parseInt(page);
            const limitNumber = parseInt (limit);
            const {totalItems, categoryDishes} = await MenuService.getByCategory(req.params.category, pageNumber, limitNumber);
            res.setHeader('x-total-count', totalItems);
            return res.json(categoryDishes);
        }catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const dish = await MenuService.getOne(req.params.id);
            return res.json(dish)
        }catch(e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const updatedDish = await MenuService.update(req.body);
            return res.json(updatedDish);
        }catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req,res){
        try{
            const dish = await MenuService.delete(req.params.id);
            return res.json(dish)
        }catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new MenuController();