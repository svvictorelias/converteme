interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  id?: string;
}
interface IUpdateUserDTO {
  id: string;
  name?: string;
  password?: string;
  email?: string;
}

export { ICreateUserDTO, IUpdateUserDTO };
