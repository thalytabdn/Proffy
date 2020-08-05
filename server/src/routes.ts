import express from 'express';
import ClassesControlle from './controllers/ClassesController';
import ConnectionsController from './controllers/connectionsController';

const routes = express.Router();
const classesControllers = new ClassesControlle();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;