import { IUpdateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute(data: IUpdateUserDTO): Promise<void> {
    if (data.email) {
      const userAlreadyExists = await this.userRepository.findByEmail(
        data.email
      );
      if (userAlreadyExists) {
        throw new AppError("User already exists");
      }
    }
    if (data.password) {
      const passwordHash = await hash(data.password, 8);
      data.password = passwordHash;
    }
    const user = await this.userRepository.findById(data.id);
    if (!user) throw new AppError("User not found", 404);
    await this.userRepository.update(data);
    return;
  }
}

export { UpdateUserUseCase };
