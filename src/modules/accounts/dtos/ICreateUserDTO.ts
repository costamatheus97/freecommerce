interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };
