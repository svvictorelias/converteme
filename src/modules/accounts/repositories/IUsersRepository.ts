import { ICreateUserDTO, IUpdateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  update(data: IUpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };
