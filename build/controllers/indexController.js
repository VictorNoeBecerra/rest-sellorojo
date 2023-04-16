"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import pool from '../database';
class IndexController {
    index(req, res) {
        console.log("IndexController");
        res.json({ 'status': 'connected' });
    }
    reciveCoordinates(req, res) {
        const coordinates = req.body;
        console.log('\n\narrived: ', coordinates);
        res.json({ 'status': 'updated' });
    }
}
const indexController = new IndexController;
exports.default = indexController;
// data: req.body['status'] ? 'Connected' : 'Updated'            
