import express, { Application } from "express";
import { connectDatabase } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middlewares";

class App {
	public app: Application;
	constructor() {
		this.app = express();
		this.middlewaresInitialize();
		this.initializeRoutes();
		this.interceptionError();
		connectDatabase();
	}
	initializeRoutes() {
		// this.app.use('/', require('./routes'));
	}
	interceptionError() {
		this.app.use(errorMiddleware);
	}
	middlewaresInitialize() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true })); // text=Hello%20World
	}
	listen() {
		this.app.listen(3333, () => {
			console.log("Listening on port 3333");
		});
	}
}
export { App };
