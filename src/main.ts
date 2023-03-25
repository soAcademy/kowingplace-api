import express, { Application, NextFunction, Request, Response } from "express";
import { AppRoutes } from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 7470;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("good health"));
// path ที่ browser ยิง

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response, next: NextFunction) =>
      route.middleWare!(req, res, next),
    (request: Request, response: Response) => route.action(request, response)
  );
});

app.listen(PORT, () => {
  console.log("server start on port " + PORT);
});
