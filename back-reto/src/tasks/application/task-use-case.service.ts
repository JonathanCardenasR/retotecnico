import { Inject, Injectable } from '@nestjs/common';
import { IResponse, ITaskUseCaseService } from './task-use-case.interface';
import { TaskDto } from '../infrastructure/dto/task.dto';
import { TaskRepository } from '../domain/repository/task.repository';
import { ICrudTaskRepository } from '../domain/repository/task.interface';

@Injectable()
export class TaskUseCaseService implements ITaskUseCaseService {
  constructor(
    @Inject(TaskRepository)
    private readonly taskRepository: ICrudTaskRepository,
  ) {}

  async getAllTasks(userId: number): Promise<TaskDto[]> {
    const tasks = await this.taskRepository.getAllTasks(userId);
    return tasks.map((task) => task);
  }

  async createTask(newTask: TaskDto, userId: number): Promise<IResponse> {
    await this.taskRepository.createTask(newTask, userId);
    return { message: 'Task created', code: 200 };
  }

  async updateTask(id: number, task: TaskDto): Promise<IResponse> {
    await this.taskRepository.updateTask(id, task);
    return { message: 'Task updated', code: 200 };
  }

  async deleteTask(id: number): Promise<IResponse> {
    await this.taskRepository.deleteTask(id);
    return { message: 'Task deleted', code: 200 };
  }
}
