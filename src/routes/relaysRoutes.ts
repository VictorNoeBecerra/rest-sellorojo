import { Router } from 'express';
import relaysController from '../controllers/relaysController';

class RelaysRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', relaysController.list);         
        this.router.post('/', relaysController.create);
        this.router.put('/:id', relaysController.update);
        this.router.delete('/:id', relaysController.delete);
        this.router.get('/:id', relaysController.search);
    }
}

const relaysRoutes = new RelaysRoutes();
export default relaysRoutes.router;