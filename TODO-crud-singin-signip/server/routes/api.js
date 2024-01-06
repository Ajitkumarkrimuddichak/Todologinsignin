import express from "express";
import RegisterController from "../controllers/RegisterController.js";
import { RegisterSchema } from "../validatorSchema/RegisterSchema.js";
import Login from "../controllers/LoginController.js";
import { LoginSchema } from "../validatorSchema/LoginSchema.js";
import { createTodo } from "../controllers/TodoController.js";
import { check } from "express-validator";
import { GetTodos } from "../controllers/TodoListController.js";
import { MarkTodo } from "../controllers/MarkTodoController.js";
import { RemoveTodo } from "../controllers/RemoveTodoController.js";

const apiRoute = express.Router();
export const apiProtected = express.Router();

apiRoute.post("/register", RegisterSchema, RegisterController);
apiRoute.post("/login", LoginSchema, Login);

//Protected Routers
apiProtected.post(
  "/createTodo",
  [check("desc", "Todo desc is required").exists()],
  createTodo
);

apiProtected.post(
  "/marktodo",
  [check("todo_id", "Todo id is required").exists()],
  MarkTodo
);

apiProtected.post(
  "/deleteTodo",
  [check("todo_id", "Todo id is required").exists()],
  RemoveTodo
);

apiProtected.get("/todolist", GetTodos);

export default apiRoute;
