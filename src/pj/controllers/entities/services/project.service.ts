import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from '../project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];
  private idCounter = 1;

  create(createProjectDto: CreateProjectDto): Project {
    const newProject = new Project();
    newProject.id = this.idCounter++;
    newProject.name = createProjectDto.name;
    newProject.description = createProjectDto.description;
    newProject.ownerId = createProjectDto.ownerId;
    newProject.createdAt = new Date();
    newProject.updatedAt = new Date();

    this.projects.push(newProject);
    return newProject;
  }

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: number): Project {
    const project = this.projects.find((p) => p.id === id);
    if (!project) {
      throw new NotFoundException(`Không tìm thấy dự án với ID ${id}`);
    }
    return project;
  }

  update(id: number, updateProjectDto: Partial<CreateProjectDto>): Project {
    const project = this.findOne(id);
    Object.assign(project, updateProjectDto);
    project.updatedAt = new Date();
    return project;
  }

  remove(id: number): { message: string } {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Không tìm thấy dự án với ID ${id}`);
    }
    this.projects.splice(index, 1);
    return { message: `Xóa thành công dự án có ID ${id}` };
  }
}
