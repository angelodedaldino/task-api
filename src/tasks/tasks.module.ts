import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { TaskSchema } from './task.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Task',schema:TaskSchema}])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
