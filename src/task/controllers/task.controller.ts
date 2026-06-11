import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../services/task.service';

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
}