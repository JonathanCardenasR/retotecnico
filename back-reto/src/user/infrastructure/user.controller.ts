import { Body, Controller, Delete, Inject, Param, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import {
  IResponse,
  IUserUseCaseService,
} from '../application/user-use-case.interface';
import { UserUseCaseService } from '../application/user-use-case.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserUseCaseService)
    private readonly _userService: IUserUseCaseService,
  ) {}

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() user: UserDto,
  ): Promise<IResponse> {
    return this._userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<IResponse> {
    return this._userService.deleteUser(id);
  }
}
