import { IUpdateUserRepositoryModel } from '../models/user-repository.model';

export interface ICrudUserRepository {
  updateUser(id: number, user: IUpdateUserRepositoryModel): Promise<void>;
  deleteUser(id: number): Promise<void>;
}
