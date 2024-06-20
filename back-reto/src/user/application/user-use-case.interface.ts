import { UserDto } from '../infrastructure/dto/user.dto';

export interface IUserUseCaseService {
  updateUser(id: number, user: UserDto): Promise<IResponse>;
  deleteUser(id: number): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
