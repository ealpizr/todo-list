import { ApiError, InternalError } from "../responses/Error";

// eslint-disable-next-line no-unused-vars
export default (err, _, res, __) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
    return;
  }
  console.log(err);
  ApiError.handle(new InternalError(), res);
};
