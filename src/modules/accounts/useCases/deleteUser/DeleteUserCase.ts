import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    if (!id) throw new AppError("User id is required", 401);
    const user = await this.userRepository.findById(id);
    if (!user) throw new AppError("User not found", 404);

    await this.userRepository.delete(id);
  }
}

export { DeleteUserUseCase };
