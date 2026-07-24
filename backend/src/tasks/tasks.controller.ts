import { Controller } from '@nestjs/common';
import { Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

import { TasksService } from './tasks.service';

import { CreateTaskDto } from './dto/create-task.dto';



@Controller('tasks')
export class TasksController {


constructor(
    private readonly tasksService: TasksService
){}



@Post()
create(
    @Body() data:CreateTaskDto
){

    return this.tasksService.create(data);

}



@Get()
findAll(){

    return this.tasksService.findAll();

}



@Get(':id')
findOne(
    @Param('id') id:string
){

    return this.tasksService.findOne(
        Number(id)
    );

}



@Put(':id')
update(
    @Param('id') id:string,
    @Body() data:CreateTaskDto
){

    return this.tasksService.update(
        Number(id),
        data
    );

}



@Delete(':id')
remove(
    @Param('id') id:string
){

    return this.tasksService.remove(
        Number(id)
    );

}


}