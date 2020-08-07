import express, { request, response } from 'express';
import db from './connection';
import toMinutes from '../utils/toMinutes';
import ClassesController from '../controllers/ClassesController';
import ConnectionsController from '../controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/', (request, response) => {
    return response.json({ message: "Hello!" });
});

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
