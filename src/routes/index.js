import { Router } from "express";
import todoService from "../services";
import { InternalError } from "../responses/Error";
import { SuccessResponse } from "../responses/Response";

const router = Router();

router.get("/", (_, res, next) => {
  todoService
    .list()
    .then(todos => new SuccessResponse(200, todos).send(res))
    .catch(e => next(e));
});

router.post("/", (req, res, next) => {
  todoService
    .create(req)
    .then(t => new SuccessResponse(201, t).send(res))
    .catch(e => next(e));
});

router.delete("/:id", (req, res, next) => {
  todoService
    .delete(req)
    .then(() => new SuccessResponse(200, "successfully deleted").send(res))
    .catch(e => next(e));
});

router.patch("/:id", (req, res, next) => {
  todoService
    .update(req)
    .then(t => new SuccessResponse(200, t).send(res))
    .catch(e => next(e));
});

router.get("/internal-error-test", () => {
  throw new InternalError("Internal Server Error Test");
});

export default router;
