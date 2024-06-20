import { Inject, Injectable } from '@nestjs/common';
import { IResponse, IUserUseCaseService } from './user-use-case.interface';
import { UserDto } from '../infrastructure/dto/user.dto';
import { ICrudUserRepository } from '../domain/repository/user.interface';
import { UserRepository } from '../domain/repository/user.repository';

@Injectable()
export class UserUseCaseService implements IUserUseCaseService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: ICrudUserRepository,
  ) {}

  async updateUser(id: number, user: UserDto): Promise<IResponse> {
    await this.userRepository.updateUser(id, user);
    return { message: 'User updated', code: 200 };
  }

  async deleteUser(id: number): Promise<IResponse> {
    await this.userRepository.deleteUser(id);
    return { message: 'User deleted', code: 200 };
  }
}
