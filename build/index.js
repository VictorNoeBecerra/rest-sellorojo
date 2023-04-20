"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import indexRoutes from './routes/indexRoutes';
// import relaysRoutes from './routes/relaysRoutes';
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        // this.app.use('/roles', rolesRoutes);
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/users', usersRoutes_1.default);
    }
    start() {
        console.log('Starting');
        try {
            this.app.listen(this.app.get('port'), () => {
                console.log(`Listening on puerto marrano: `, this.app.get('port'));
            });
        }
        catch (error) {
            console.log('nose pudo', error);
        }
    }
}
const server = new Server();
server.start();
