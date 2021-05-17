import { Router } from "express";
import todo from "../models/todo";
import { InternalError } from "../responses/Error";
import { SuccessResponse } from "../responses/Response";

const router = Router();

router.get("/", async (_, res, next) => {
  todo
    .create({
      task: "Todo from Express",
    })
    .then(t => new SuccessResponse(200, t).send(res))
    .catch(e => next(e));
});

router.get("/internal-error-test", () => {
  throw new InternalError("Internal Server Error Test");
});

export default router;
