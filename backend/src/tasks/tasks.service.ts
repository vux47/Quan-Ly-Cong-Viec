import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Task } from './entities/task.entity';

import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {


constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
){}



create(createTaskDto: CreateTaskDto){

    const task = this.taskRepository.create(
        createTaskDto
    );

    return this.taskRepository.save(task);

}



findAll(){

    return this.taskRepository.find();

}



findOne(id:number){

    return this.taskRepository.findOne({
        where:{
            id
        }
    });

}



update(id:number, data:CreateTaskDto){

    return this.taskRepository.update(
        id,
        data
    );

}



remove(id:number){

    return this.taskRepository.delete(id);

}


}