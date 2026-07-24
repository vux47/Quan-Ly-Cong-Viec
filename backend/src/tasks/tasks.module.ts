import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TaskRepository } from './tasks.repository';
import { TaskService } from './tasks.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
  exports: [TaskService],
})
export class TasksModule {}