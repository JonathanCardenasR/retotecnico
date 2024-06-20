import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ITaskUseCaseService,
  IResponse,
} from '../application/task-use-case.interface';
import { TaskDto } from './dto/task.dto';
import { TaskUseCaseService } from '../application/task-use-case.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('task')
@UseGuards(AuthGuard())
export class TaskController {
  constructor(
    @Inject(TaskUseCaseService)
    private readonly _taskService: ITaskUseCaseService,
  ) {}

  @Get('user/:id')
  getAllTasks(@Param('id') userId: number): Promise<TaskDto[]> {
    return this._taskService.getAllTasks(userId);
  }

  @Post('user/:id')
  createTask(
    @Body() task: TaskDto,
    @Param('id') userId: number,
  ): Promise<IResponse> {
    return this._taskService.createTask(task, userId);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() task: TaskDto,
  ): Promise<IResponse> {
    return this._taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<IResponse> {
    return this._taskService.deleteTask(id);
  }
}
