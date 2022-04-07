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

import OnlineStoreAPI from "./api/routes.js"

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
		// remove last slash and redirect to url without lash slash
		this.app.use((req, res, next) => {
			if(req.url.length > 1 && req.url.endsWith("/")) {
				return res.status(301).redirect(req.url.slice(0, -1))
			}

			next();
		})

		// register online store api
		new OnlineStoreAPI().RegisterAPI(this.app);

		this.app.use(this.paths.homepage, index);
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
}

export default App
