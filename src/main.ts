import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => route.action(request, response)
  );
});

app.listen(7470, () => {
  console.log("server start on port 7470");
});
