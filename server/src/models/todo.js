import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  task: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Todo", todoSchema);
