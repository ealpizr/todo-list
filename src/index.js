import "dotenv/config";
import express from "express";
import db from "./db";
import routes from "./routes";
import { NotFoundError } from "./responses/Error";
import errorHandler from "./helpers/errorHandler";

const { MONGO_URI, EXPRESS_PORT } = process.env;

const app = express();
app.use(express.json());
app.use(routes);

app.use((_, __, next) => next(new NotFoundError()));
app.use(errorHandler);

db.connect(MONGO_URI, () => {
  app.listen(EXPRESS_PORT, () => {
    console.log(`express server running on port ${EXPRESS_PORT}`);
  });
});
