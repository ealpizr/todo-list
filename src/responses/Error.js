/* eslint-disable max-classes-per-file */
import { InternalErrorResponse, NotFoundResponse } from "./Response";

const ErrorType = {
  NOT_FOUND: "NotFoundError",
  INTERNAL_ERROR: "InternalServerError",
};

export class ApiError extends Error {
  constructor(type, message) {
    super(message);
    this.name = type;
  }

  static handle(err, res) {
    switch (err.name) {
      case ErrorType.INTERNAL_ERROR:
        return new InternalErrorResponse(err.message).send(res);
      case ErrorType.NOT_FOUND:
        return new NotFoundResponse(err.message).send(res);
      default: {
        console.log(err);
        return new InternalErrorResponse("Something wrong happened").send(res);
      }
    }
  }
}

export class InternalError extends ApiError {
  constructor(message = "Internal Server Error") {
    super(ErrorType.INTERNAL_ERROR, message);
  }
}

export class NotFoundError extends ApiError {
  constructor(message = "Not Found") {
    super(ErrorType.NOT_FOUND, message);
  }
}
