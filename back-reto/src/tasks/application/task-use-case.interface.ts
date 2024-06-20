import { TaskDto } from '../infrastructure/dto/task.dto';

export interface ITaskUseCaseService {
  getAllTasks(userId: number): Promise<TaskDto[]>;
  createTask(newTask: TaskDto, userId: number): Promise<IResponse>;
  updateTask(id: number, task: TaskDto): Promise<IResponse>;
  deleteTask(id: number): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
