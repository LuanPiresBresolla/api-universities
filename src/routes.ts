import { Router } from 'express';

import { UniversitiesController } from './controllers/UniversitiesController';
import { FindUniversitiesByUfController } from './controllers/FindUniversitiesByUfController';
import { FindUniversitiesByIBGEController } from './controllers/FindUniversitiesByIBGEController';

const routes = Router();

const universitiesController = new UniversitiesController();
const findUniversitiesByUfController = new FindUniversitiesByUfController();
const findUniversitiesByIBGEController = new FindUniversitiesByIBGEController();

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'API Online' });
});

routes.get('/universities', universitiesController.index);
routes.get('/universities/:id', universitiesController.show);

routes.get('/universities-uf', findUniversitiesByUfController.index);

routes.get('/universities/ibge/:id', findUniversitiesByIBGEController.index);

export default routes;
