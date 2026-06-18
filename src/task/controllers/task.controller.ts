import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from '../services/task.service';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findById(Number(id));
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateTaskDto) {
    return this.taskService.update(Number(id), updateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(Number(id));
  }
}