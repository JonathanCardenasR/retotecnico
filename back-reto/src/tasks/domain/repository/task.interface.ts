import {
  ITaskRepositoryModel,
  IcreateTaskRepositoryModel,
  IupdateTaskRepositoryModel,
} from '../models/task-repository.model';

export interface ICrudTaskRepository {
  getAllTasks(userId: number): Promise<ITaskRepositoryModel[]>;
  createTask(
    newTask: IcreateTaskRepositoryModel,
    userId: number,
  ): Promise<void>;
  updateTask(id: number, task: IupdateTaskRepositoryModel): Promise<void>;
  deleteTask(id: number): Promise<void>;
}
