import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserByIdUseCase";
import { IUpdateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: IUpdateUserDTO = request.body;
    data.id = id;
    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    await updateUserUseCase.execute(data);

    return response.status(204).send();
  }
}

export { UpdateUserController };
