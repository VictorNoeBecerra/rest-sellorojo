import { Request, Response } from 'express';
// import pool from '../database';

class IndexController {
    public index (req:Request, res:Response){
        console.log("IndexController")
        res.json({'status':'connected'});
    }

    public reciveCoordinates (req:Request, res:Response){
        const coordinates : JSON = req.body;
        console.log('\n\narrived: ', coordinates);
        res.json({'status':'updated'});
    }
}
const indexController = new IndexController;
export default indexController;

// data: req.body['status'] ? 'Connected' : 'Updated'            