import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task.controller';
import { TaskRepository } from './repositories/task.repository';
import { TaskService } from './services/task.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
  exports: [TaskService],
})
export class TaskModule {}