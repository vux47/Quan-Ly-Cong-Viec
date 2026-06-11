import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskRepository } from '../repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  findAll() {
    return this.taskRepository.findAll();
  }

  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.create(createTaskDto);
  }
}