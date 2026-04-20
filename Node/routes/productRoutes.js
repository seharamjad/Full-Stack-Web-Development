import express from 'express'
import { GetAllproducts, GetProductDetail } from '../controller/productController.js';

const routes = express.Router();

// /api/products

routes.get('/', GetAllproducts);
routes.get('/:id', GetProductDetail);


export default routes