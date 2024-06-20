import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CONFIG_DATABASE } from './commons/infrastructure/config-database';
import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CONFIG_DATABASE(), TasksModule, UsersModule, AuthModule],
})
export class AppModule {}
