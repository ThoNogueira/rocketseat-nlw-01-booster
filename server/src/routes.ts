import express, { request, response } from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsControllers'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const pointsControllers = new PointsController();
const itemsController = new ItemsController();

// index, show, create, update, delete
routes.get('/items', itemsController.index);

routes.post('/points', pointsControllers.create);
routes.get('/points/:id', pointsControllers.show);
routes.get('/points', pointsControllers.index);

export default routes;