import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskEntity } from '../entities/task.entity';

@Injectable()
export class TaskRepository {
  private readonly tasks: TaskEntity[] = [];

  findAll(): TaskEntity[] {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): TaskEntity {
    const task: TaskEntity = {
      id: this.tasks.length + 1,
      title: createTaskDto.title,
      description: createTaskDto.description,
      completed: false,
      userId: createTaskDto.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.tasks.push(task);
    return task;
  }
}