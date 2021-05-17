/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { Types } from "mongoose";
import todo from "../models/todo";
import { BadRequestError } from "../responses/Error";

export default class todoServices {
  static list() {
    return new Promise((resolve, reject) => {
      todo
        .find({})
        .then(todos =>
          resolve(
            todos.map(t => ({
              id: t._id,
              task: t.task,
              completed: t.completed,
              createdAt: t.createdAt,
            }))
          )
        )
        .catch(e => reject(e));
    });
  }

  static create(req) {
    return new Promise((resolve, reject) => {
      const { task } = req.body;

      if (!task)
        return reject(new BadRequestError("Bad Request, task is required"));

      todo
        .create({
          task,
        })
        .then(t =>
          resolve({
            id: t._id,
            task: t.task,
            completed: t.completed,
            createdAt: t.createdAt,
          })
        )
        .catch(e => reject(e));
    });
  }

  static delete(req) {
    return new Promise((resolve, reject) => {
      const { id } = req.params;

      if (!Types.ObjectId.isValid(id))
        return reject(new BadRequestError("Bad Request, id is invalid"));

      /* 
        There could be a better way to do this.
        If a non existent id is given, mongoose
        doest not reject the promise, therefore
        the response is always successful.
      */

      todo
        .findByIdAndDelete(id)
        .then(resolve())
        .catch(e => reject(e));
    });
  }

  static update(req) {
    return new Promise((resolve, reject) => {
      const { id } = req.params;
      const { completed } = req.body;

      if (typeof completed !== "boolean")
        return reject(
          new BadRequestError("Bad Request, completed field is required")
        );
      if (!Types.ObjectId.isValid(id))
        return reject(new BadRequestError("Bad Request, id is invalid"));

      /* 
        There could be a better way to do this.
        If a non existent id is given, mongoose
        doest not reject the promise, therefore
        the response is always successful.
      */

      todo
        .findByIdAndUpdate(id, { completed }, { new: true })
        .then(t => resolve(t))
        .catch(e => reject(e));
    });
  }
}
