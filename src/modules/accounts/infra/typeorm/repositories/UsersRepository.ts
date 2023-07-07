import {
  ICreateUserDTO,
  IUpdateUserDTO
} from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      id
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
  async update(data: IUpdateUserDTO): Promise<void> {
    const { id, ...rest } = data;

    await this.repository.update(id, rest);
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UserRepository };
