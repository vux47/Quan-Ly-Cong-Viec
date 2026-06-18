import { CreateProjectDto } from './entities/services/dto/create-project.dto';
import { ProjectService } from './entities/services/project.service';

export class ProjectController {
  private projectService: ProjectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  create(createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  findAll() {
    return this.projectService.findAll();
  }

  findOne(id: number) {
    return this.projectService.findOne(id);
  }

  update(id: number, updateProjectDto: Partial<CreateProjectDto>) {
    return this.projectService.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.projectService.remove(id);
  }
}