import { Inject, Injectable } from '@nestjs/common';
import { OrmTaskRepository } from '../../../commons/domain/repository/orm-task.repository';
import { IOrmTaskRepository } from '../../../commons/domain/repository/orm-task.repository.interface';
import { ICrudTaskRepository } from './task.interface';
import {
  ITaskRepositoryModel,
  IcreateTaskRepositoryModel,
} from '../models/task-repository.model';

@Injectable()
export class TaskRepository implements ICrudTaskRepository {
  constructor(
    @Inject(OrmTaskRepository)
    private readonly ormTaskRepository: IOrmTaskRepository,
  ) {}

  async getAllTasks(userId: number): Promise<ITaskRepositoryModel[]> {
    const allTasks = await this.ormTaskRepository.getAllTasks(userId);

    return allTasks.map((task) => ({
      id: task.id,
      name: task.name,
      state: task.state,
      userId: task.userId,
    }));
  }

  async createTask(
    newTask: IcreateTaskRepositoryModel,
    userId: number,
  ): Promise<void> {
    await this.ormTaskRepository.createTask(newTask, userId);
  }

  async updateTask(id: number, task: ITaskRepositoryModel): Promise<void> {
    await this.ormTaskRepository.updateTask(id, task);
  }

  async deleteTask(id: number): Promise<void> {
    await this.ormTaskRepository.deleteTask(id);
  }
}
