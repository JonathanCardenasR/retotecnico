import { Module } from '@nestjs/common';
import { TaskController } from './infrastructure/task.controller';
import { TaskUseCaseService } from './application/task-use-case.service';
import { TaskRepository } from './domain/repository/task.repository';
import { OrmTaskRepository } from 'src/commons/domain/repository/orm-task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/commons/domain/entities/task.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TaskController],
  providers: [TaskUseCaseService, TaskRepository, OrmTaskRepository],
  imports: [TypeOrmModule.forFeature([TaskEntity]), AuthModule],
})
export class TasksModule {}
