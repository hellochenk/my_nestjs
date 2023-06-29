import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UsersModule } from '../user/users.module';
import { ConfigModule } from '@nestjs/config';
import { postgresConfig } from '../../config';
import { CatsModule } from '../cats/cats.module';
import { Photo } from '../photo/photo.entities';

const getTypeOrmModules = () =>
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: postgresConfig.port,
    username: postgresConfig.name,
    password: postgresConfig.password,
    database: postgresConfig.database,
    entities: [User, Photo],
    synchronize: true,
    autoLoadEntities: true,
  });

@Module({
  imports: [
    ConfigModule.forRoot(),
    getTypeOrmModules(),
    AppModule,
    CatsModule,
    UsersModule,
  ],
})
export class AppModule {}
