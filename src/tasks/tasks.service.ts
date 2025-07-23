import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task} from './task.schema';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private readonly tasks:Model<Task>){}
    async createTask(task:Task){
        return await this.tasks.create(task)
    }

    async findTaskByTitle(title:string):Promise<Task | null>{
        const taskFound = await this.tasks.findOne({title:title})
        console.log(taskFound);
        return taskFound
    }
    async findTasks():Promise<Task[] | null>{
        return await this.tasks.find()
    }

    async updateTask(title:string,task:Task):Promise<Task | null>{
        return await this.tasks.findOneAndUpdate({title:title},task)
    }
    async deleteTask(title:string):Promise<string | null>{
        return await this.tasks.findOneAndDelete({title:title})
    }
}
