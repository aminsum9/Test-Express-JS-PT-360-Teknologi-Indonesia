

import express from 'express';
import "express-group-routes";
import bodyParser from "body-parser";

import productController from "./controllers/productController.js";

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.group('/api', (router) => {

	router.group('/product', (router) => {
		router.get('/', new productController().getProducts);
		router.get('/get-by-id', new productController().getById);
		router.post('/add', new productController().add);
		router.post('/update', new productController().update);
		router.delete('/delete', new productController().delete);

    });
    
});

app.listen(process.env.PORT || 8000, () => {
	console.log(`listen on port ${port}!`)
});
