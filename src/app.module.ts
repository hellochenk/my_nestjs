import { Module } from '@nestjs/common';
import { AppController } from '@src/controllers/app.controller';
import { AppService } from './app.service';
import { CatsController } from '@src/controllers/cats.controller';
import { CatsService } from '@src/services/cats.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';
import { Photo } from './photo/photo.entities';
import { ConfigModule } from '@nestjs/config';
import { postgresConfig } from './config';
// import { UsersController } from './user/users.controller';
// import { UsersService } from './user/users.service';

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
  imports: [ConfigModule.forRoot(), getTypeOrmModules(), UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
