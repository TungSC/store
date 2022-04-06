import createError from 'http-errors'
import express from 'express';
import path from "path";
import cors from "cors";
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import index from "./routes/index.js";
//import "./sequelize/sequelize.js"

import onlineStoreApi from "./api/routes.js"

//import onlineStoreApi from "./api/routes.js";

class App {
	constructor() {
		this.app = express()
		this.paths = {
			homepage: "/",
		}

		this.middlewares();
		this.routes();
		this.initModule();

	}

	initModule() {
		this.app.use(function (req, res, next) {
			next(createError(404));
		});
		this.app.use(this.errorHandler)
		this.app.set('views', path.join(__dirname, 'views'));
		this.app.set('view engine', 'ejs');
		this.app.use(logger('dev'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: false}));
		this.app.use(cookieParser());
		this.app.use(express.static(path.join(__dirname, 'public')));
	}

	middlewares() {
		this.app.use(cors()); // Enable CORS
	}

	// Bind controllers to routes
	routes() {
		this.app.use(this.paths.homepage, index);
		this.registerApi();
	}

	errorHandler(err, req, res, next) {
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		res.status(err.status || 500);
		res.render('error');
	}

	listen() {
		console.log("Server running on port: ", process.env.PORT);
	}

	registerApi() {
		//let router = express.Router();
		onlineStoreApi.forEach((value) => {
			// this is to group child router
			if(value?.children) {
				value.children.forEach((child) => {
					this.app[child.method](value.path + child.path, child.module)
				})
			}

			// if parent having module, we still set module for parent
			value.module && this.app[value.method](value.path, value.module)
		})
	}
}

export default App
