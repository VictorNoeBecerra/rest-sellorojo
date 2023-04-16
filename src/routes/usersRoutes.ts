import { Router } from 'express';
import usersController from '../controllers/usersController';

class UsersRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', usersController.list);         
        this.router.post('/', usersController.create);
        this.router.put('/:id', usersController.update);
        this.router.delete('/:id', usersController.delete);
        this.router.get('/:id', usersController.search);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;