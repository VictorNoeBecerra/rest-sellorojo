import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

// import indexRoutes from './routes/indexRoutes';
// import relaysRoutes from './routes/relaysRoutes';
import usersRoutes from './routes/usersRoutes';
import indexRoutes from './routes/indexRoutes';


class Server {     
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        // this.app.use('/roles', rolesRoutes);

        this.app.use('/', indexRoutes);
        this.app.use('/users', usersRoutes);
    }
    start():void{
        try {
            this.app.listen(this.app.get('port'), ()=>{
                console.log(`Listening on puerto marrano: `, this.app.get('port'));         
            });            
        } catch (error) {
            console.log('nose pudo',error);
        }
    }
}

const server = new Server();
server.start();