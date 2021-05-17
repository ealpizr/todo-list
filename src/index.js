import "dotenv/config";
import express from "express";
import db from "./db";
import todo from "./models/todo";

const { MONGO_URI, EXPRESS_PORT } = process.env;

const app = express();
app.use(express.json());

app.get("/", async (_, res) => {
  todo
    .create({
      task: "Todo from Express",
    })
    .then(t => {
      res.status(201).send({ t });
    })
    .catch(e => {
      res.status(500).send({ error: "internal error" });
      console.log(e);
    });
});

db.connect(MONGO_URI, () => {
  app.listen(EXPRESS_PORT, () => {
    console.log(`express server running on port ${EXPRESS_PORT}`);
  });
});
