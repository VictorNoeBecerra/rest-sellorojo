"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.default.list);
        this.router.post('/', usersController_1.default.create);
        this.router.put('/:id', usersController_1.default.update);
        this.router.delete('/:id', usersController_1.default.delete);
        this.router.get('/:id', usersController_1.default.search);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
