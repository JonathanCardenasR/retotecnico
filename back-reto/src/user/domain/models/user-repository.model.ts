export interface IUserRepositoryModel {
  id: number;
  username: string;
  password: string;
  state: string;
}

export type ICreateUserRepositoryModel = Omit<
  IUserRepositoryModel,
  'id' | 'state'
>;
export type IUpdateUserRepositoryModel = Omit<IUserRepositoryModel, 'id'>;
