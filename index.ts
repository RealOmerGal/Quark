import express, { RequestHandler } from "express";
import { Quark } from "./app";
import { Get } from "./decorators/controller/methods";
import { Controller } from "./decorators/controller";
import { Use } from "./decorators/controller/use";

const app = express();

const logger: RequestHandler = (req, res, next) => {
  console.log("No");
  next();
};

@Controller("/api")
class TestController {
  @Get()
  helloWorld(request: any, response: any) {
    response.status(200).send(`<h1>Heello </h1?`);
  }
}

app.use(Quark.Router.getInstance());

app.listen(8080, () => {
  console.log("Started Web Server on port 8080");
});
