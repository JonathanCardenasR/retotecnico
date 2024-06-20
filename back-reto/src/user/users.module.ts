import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/commons/domain/entities/user.entity';
import { UserUseCaseService } from './application/user-use-case.service';
import { UserRepository } from './domain/repository/user.repository';
import { OrmUserRepository } from 'src/commons/domain/repository/orm-user.repository';
import { UserController } from './infrastructure/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserUseCaseService, UserRepository, OrmUserRepository],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class UsersModule {}
