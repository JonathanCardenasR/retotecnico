import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { IOrmUserRepository } from './orm-user.repository.interface';
import { IGetUserRepositoryDto } from '../dto/user-repository.dto';

@Injectable()
export class OrmUserRepository
  extends Repository<UserEntity>
  implements IOrmUserRepository
{
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async getUserByUsername(
    user: IGetUserRepositoryDto,
  ): Promise<IGetUserRepositoryDto> {
    const userFound = await this.findOne({
      where: { username: user.username },
    });

    if (!userFound) throw new Error('User not found');

    return userFound;
  }

  async createUser(newUser: IGetUserRepositoryDto): Promise<void> {
    await this.save(newUser);
  }

  async updateUser(id: number, user: IGetUserRepositoryDto): Promise<void> {
    const userToUpdate = await this.findOneBy({ id });
    if (!userToUpdate) throw new Error('User not found');
    const updatedTask = this.merge(userToUpdate, user);
    await this.save(updatedTask);
  }

  async deleteUser(id: number): Promise<void> {
    const userToUpdate = await this.findOneBy({ id });
    if (!userToUpdate) throw new Error('User not found');
    userToUpdate.state = 'INACTIVE';
    await this.save(userToUpdate);
  }
}
