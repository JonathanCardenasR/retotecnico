import {
  IGetUserRepositoryDto,
  IUserRepositoryDto,
} from '../dto/user-repository.dto';

export interface IOrmUserRepository {
  getUserByUsername(user: IUserRepositoryDto): Promise<IGetUserRepositoryDto>;
  createUser(newTask: IUserRepositoryDto): Promise<void>;
  updateUser(id: number, user: IUserRepositoryDto): Promise<void>;
  deleteUser(id: number): Promise<void>;
}
