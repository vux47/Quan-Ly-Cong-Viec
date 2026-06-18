import { ProjectController } from './controllers/project.controller';
import { ProjectService } from './controllers/entities/services/project.service';

export class ProjectModule {
  static forRoot() {
    return {
      module: ProjectModule,
      controllers: [ProjectController],
      providers: [ProjectService],
      exports: [ProjectService],
    };
  }
}

export { ProjectController, ProjectService };