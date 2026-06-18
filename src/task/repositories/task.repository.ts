import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskEntity } from '../entities/task.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';

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
      status: createTaskDto.status ?? 'To Do',
      assignedTo: createTaskDto.assignedTo ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.tasks.push(task);
    return task;
  }

  findById(id: number): TaskEntity | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto): TaskEntity | undefined {
    const task = this.findById(id);
    if (!task) return undefined;
    if (updateTaskDto.title !== undefined) task.title = updateTaskDto.title;
    if (updateTaskDto.description !== undefined) task.description = updateTaskDto.description;
    if (updateTaskDto.status !== undefined) task.status = updateTaskDto.status;
    if (updateTaskDto.assignedTo !== undefined) task.assignedTo = updateTaskDto.assignedTo;
    task.updatedAt = new Date();
    return task;
  }

  delete(id: number): boolean {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }
}