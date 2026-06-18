import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskRepository } from '../repositories/task.repository';
import { AssignTaskDto } from '../dto/assign-task.dto';
import { UpdateTaskStatusDto } from '../dto/update-task-status.dto';
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
    return this.taskRepository.create(createTaskDto);
  }

  assignTask(id: number, assignDto: AssignTaskDto) {
    const user = this.userService.findById(assignDto.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const task = this.taskRepository.assignToUser(id, assignDto.userId);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  updateStatus(id: number, updateDto: UpdateTaskStatusDto) {
    return this.taskRepository.updateStatus(id, updateDto.completed);
  }

  findById(id: number) {
    return this.taskRepository.findById(id);
  }
}