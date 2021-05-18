/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { ApiError, InternalError, BadRequestError } from "../responses/Error";

export default (err, _, res, __) => {
  if (err instanceof ApiError) {
    return ApiError.handle(err, res);
  }

  /*
    express.json() throws a 400 error code
    when the body contains invalid json
  */
  if (err instanceof SyntaxError && err.statusCode === 400) {
    return ApiError.handle(
      new BadRequestError("Bad Request, Invalid JSON"),
      res
    );
  }

  console.log(err);
  ApiError.handle(new InternalError(), res);
};
