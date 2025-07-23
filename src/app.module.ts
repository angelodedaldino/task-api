import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TasksModule,
    MongooseModule.forRootAsync({
      imports:[ConfigModule.forRoot({envFilePath:'.env'})],
      useFactory: async (configService:ConfigService) =>  ({uri:configService.get<string>('MONGODB_URI')}),
      inject:[ConfigService]   
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
