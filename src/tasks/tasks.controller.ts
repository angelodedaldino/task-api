import { Controller,Get,Post,Delete,Patch,Param, Body, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.schema';
import { ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  @ApiResponse({
    description:'fetching all tasks',
    type:Task
  })

  findAll(){
    return this.tasksService.findTasks()
  } 
  @ApiResponse({
    description:'fetching a task by its title',
    type:Task
  })

  @Get('/search')
  findTaskByTitle(@Query('title') title:string){
    console.log(this.tasksService.findTaskByTitle(title));
    return this.tasksService.findTaskByTitle(title)
  }
  @Post()
  @ApiCreatedResponse({
    type:Task
  })
  create(@Body() task:Task){
    this.tasksService.createTask(task)
  }

  @Patch(':title')
  @ApiResponse({
    description:'search the task by the title of it and update the task desire field',
    type:Task
  })
  update(@Param('title') title:string,@Body() task:Task){
    console.log(title);
    return this.tasksService.updateTask(title,task)
  }

  @Delete()
  @ApiResponse({
    description:'Remove the task by its title',
    type:Task
  })
  remove(@Query('title') title:string){
    return this.tasksService.deleteTask(title)
  }
}
