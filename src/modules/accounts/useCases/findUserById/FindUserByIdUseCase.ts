import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FindUserByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User> {
    if (!id) throw new AppError("User id is required", 401);
    const user = await this.userRepository.findById(id);
    if (!user) throw new AppError("User not found", 404);

    return user;
  }
}

export { FindUserByIdUseCase };
