import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/pj.controller';
import { ProjectService } from './controllers/entities/services/pj.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}

export { ProjectController, ProjectService };