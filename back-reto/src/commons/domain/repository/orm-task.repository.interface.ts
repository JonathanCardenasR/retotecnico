import {
  IGetTaskRepositoryDto,
  ITaskRepositoryDto,
} from '../dto/task-repository.dto';

export interface IOrmTaskRepository {
  getAllTasks(userId: number): Promise<IGetTaskRepositoryDto[]>;
  createTask(newTask: ITaskRepositoryDto, userId: number): Promise<void>;
  updateTask(id: number, task: ITaskRepositoryDto): Promise<void>;
  deleteTask(id: number): Promise<void>;
}
