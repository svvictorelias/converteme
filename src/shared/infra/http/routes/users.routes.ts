import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";

import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { FindUserByIdController } from "@modules/accounts/useCases/findUserById/FindUserByIdController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserByIdController";
import { DeleteUserController } from "@modules/accounts/useCases/deleteUser/DeleteUserController";
const usersRoutes = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", ensureAuthenticated, findUserByIdController.handle);
usersRoutes.put("/:id", ensureAuthenticated, updateUserController.handle);
usersRoutes.delete("/:id", ensureAuthenticated, deleteUserController.handle);

export { usersRoutes };
