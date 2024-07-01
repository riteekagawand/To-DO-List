import mongoose, { Schema } from "mongoose";

const todosSchema = new Schema(
  {
    title: String,
    description: String,
    completed: { type: Boolean, default: false },
    priority: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todosSchema);

export default Todo;
