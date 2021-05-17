/* eslint-disable max-classes-per-file */
class Response {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }

  send(res) {
    return res.status(this.statusCode).send({
      status: this.statusCode,
      message: this.message,
    });
  }
}

export class InternalErrorResponse extends Response {
  constructor(message) {
    super(500, message);
  }
}

export class NotFoundResponse extends Response {
  constructor(message) {
    super(404, message);
  }
}

export class SuccessResponse extends Response {
  send(res) {
    return res.status(this.statusCode).send({
      status: this.statusCode,
      data: this.message,
    });
  }
}
