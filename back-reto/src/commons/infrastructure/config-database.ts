import { TypeOrmModule } from '@nestjs/typeorm';

export const CONFIG_DATABASE = () =>
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost', //'host.docker.internal'
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'reto',
    autoLoadEntities: true,
  });
