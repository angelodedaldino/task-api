import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle('Todo App API')
  .setDescription('A simple REST API for managing tasks in a ToDo application. Includes features like task creation, updating status, filtering by status, and deleting tasks.')
  .setVersion('1.0')
  .addTag('Task Management')
  .build();
  
  const document = () => SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document())
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
