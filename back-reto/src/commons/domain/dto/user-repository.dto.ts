export interface IUserRepositoryDto {
  username: string;
  state: string;
  password: string;
}

export interface IGetUserRepositoryDto extends IUserRepositoryDto {
  id: number;
}
