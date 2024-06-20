import { DataSource, Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { IOrmTaskRepository } from './orm-task.repository.interface';
import { IGetTaskRepositoryDto } from '../dto/task-repository.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrmTaskRepository
  extends Repository<TaskEntity>
  implements IOrmTaskRepository
{
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  async getAllTasks(userId: number): Promise<IGetTaskRepositoryDto[]> {
    return await this.find({
      where: { userId },
      order: { id: 'ASC' },
    });
  }

  async createTask(
    newTask: IGetTaskRepositoryDto,
    userId: number,
  ): Promise<void> {
    newTask.userId = userId;
    await this.save(newTask);
  }

  async updateTask(id: number, task: IGetTaskRepositoryDto): Promise<void> {
    const taskToUpdate = await this.findOneBy({ id });
    if (!taskToUpdate) throw new Error('Task not found');
    const updatedTask = this.merge(taskToUpdate, task);
    await this.save(updatedTask);
  }

  async deleteTask(id: number): Promise<void> {
    await this.delete(id);
  }
}
