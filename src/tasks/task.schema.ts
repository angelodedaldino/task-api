import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { Document,Types } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'
export type TaskDocument = Task & Document

@Schema({timestamps:true})
export class Task{
    @ApiProperty()
    @Prop({required:true})
    title:string

    @ApiProperty()
    @Prop()
    description:string

    @ApiProperty({enum: ['todo', 'in_progress', 'done'] })
    @Prop({ enum: ['todo', 'in_progress', 'done'], default: 'todo' })
    status: string;

    @ApiProperty()
    @Prop({enum:['low','medium','high'], default:'medium'})
    priority:string

    @ApiProperty()
    @Prop()
    dueDate:Date

}

export const TaskSchema = SchemaFactory.createForClass(Task)