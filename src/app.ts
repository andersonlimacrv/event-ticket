import express, { Application } from 'express';

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.middwareInitialize();
        this.initializeRouter();
        this.interceptionError();
    }
    initializeRouter() {
        // this.app.use('/', require('./routes'));
    }
    interceptionError() {
        //this.app.use()
    }
    middwareInitialize() {
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