import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskRepository } from '../repositories/task.repository';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly userService: UserService,
  ) {}

  findAll() {
    return this.taskRepository.findAll();
  }

  create(createTaskDto: CreateTaskDto) {
    if (createTaskDto.assignedTo !== undefined && createTaskDto.assignedTo !== null) {
      const user = this.userService.findById(createTaskDto.assignedTo);
      if (!user) {
        throw new NotFoundException('User not found');
      }
    }
    return this.taskRepository.create(createTaskDto);
  }

  findById(id: number) {
    return this.taskRepository.findById(id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    if (updateTaskDto.assignedTo !== undefined && updateTaskDto.assignedTo !== null) {
      const user = this.userService.findById(updateTaskDto.assignedTo);
      if (!user) {
        throw new NotFoundException('User not found');
      }
    }

    const task = this.taskRepository.update(id, updateTaskDto);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  delete(id: number) {
    const deleted = this.taskRepository.delete(id);
    if (!deleted) throw new NotFoundException('Task not found');
    return { message: 'Task deleted successfully' };
  }
}