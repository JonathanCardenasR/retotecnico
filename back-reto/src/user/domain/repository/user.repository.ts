import { Inject, Injectable } from '@nestjs/common';
import { ICrudUserRepository } from './user.interface';
import { OrmUserRepository } from 'src/commons/domain/repository/orm-user.repository';
import { IOrmUserRepository } from 'src/commons/domain/repository/orm-user.repository.interface';
import { IUserRepositoryModel } from '../models/user-repository.model';

@Injectable()
export class UserRepository implements ICrudUserRepository {
  constructor(
    @Inject(OrmUserRepository)
    private readonly ormUserRepository: IOrmUserRepository,
  ) {}

  async updateUser(id: number, user: IUserRepositoryModel): Promise<void> {
    await this.ormUserRepository.updateUser(id, user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.ormUserRepository.deleteUser(id);
  }
}
