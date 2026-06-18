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

  findById(id: number): TaskEntity | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  assignToUser(id: number, userId: number): TaskEntity | undefined {
    const task = this.findById(id);
    if (!task) return undefined;
    task.userId = userId;
    task.updatedAt = new Date();
    return task;
  }

  updateStatus(id: number, completed: boolean): TaskEntity | undefined {
    const task = this.findById(id);
    if (!task) return undefined;
    task.completed = completed;
    task.updatedAt = new Date();
    return task;
  }
}