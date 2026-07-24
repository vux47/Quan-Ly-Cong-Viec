import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TasksModule,
    UsersModule,
    CategoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}