"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const relaysController_1 = __importDefault(require("../controllers/relaysController"));
class RelaysRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', relaysController_1.default.list);
        this.router.post('/', relaysController_1.default.create);
        this.router.put('/:id', relaysController_1.default.update);
        this.router.delete('/:id', relaysController_1.default.delete);
        this.router.get('/:id', relaysController_1.default.search);
    }
}
const relaysRoutes = new RelaysRoutes();
exports.default = relaysRoutes.router;
