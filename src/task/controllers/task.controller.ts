import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../services/task.service';
import { AssignTaskDto } from '../dto/assign-task.dto';
import { UpdateTaskStatusDto } from '../dto/update-task-status.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Post(':id/assign')
  assign(@Param('id') id: string, @Body() assignTaskDto: AssignTaskDto) {
    return this.taskService.assignTask(Number(id), assignTaskDto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() updateDto: UpdateTaskStatusDto) {
    return this.taskService.updateStatus(Number(id), updateDto);
  }

  @Get(':id/status')
  getStatus(@Param('id') id: string) {
    const task = this.taskService.findById(Number(id));
    if (!task) return { error: 'Task not found' };
    return { id: task.id, completed: task.completed };
  }
}