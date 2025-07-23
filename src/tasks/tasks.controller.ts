import { Controller,Get,Post,Delete,Patch,Param, Body, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.schema';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  findAll(){
    return this.tasksService.findTasks()
  } 
  @Get('/search')
  findTaskByTitle(@Query('title') title:string){
    console.log(this.tasksService.findTaskByTitle(title));
    return this.tasksService.findTaskByTitle(title)
  }
  @Post()
  create(@Body() task:Task){
    this.tasksService.createTask(task)
  }
  @Patch(':title')
  update(@Param('title') title:string,@Body() task:Task){
    console.log(title);
    return this.tasksService.updateTask(title,task)
  }
  @Delete()
  remove(@Query('title') title:string){
    return this.tasksService.deleteTask(title)
  }
}
