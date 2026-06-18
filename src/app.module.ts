import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './pj/project.module';
import { AppController } from './app.controller';

@Module({
  imports: [TaskModule, UserModule, ProjectModule],
  controllers: [AppController],
})
export class AppModule {}