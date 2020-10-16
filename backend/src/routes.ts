import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesControllers';


// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET (buscar info), POST (criar info), PUT (editar info), DELETE (deletar info) e outros
// Parâmetros 
// Query Params: http://localhost:3333/users?search=joao (request.query)
// Route Params: http://localhost:3333/users/1 (identifica o recurso 1 em users) (request.params)
// Body do request: mais infos da request (request.body)

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;