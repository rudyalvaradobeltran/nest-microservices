import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.RMQ,
  options: {
      urls: [process.env.AMPQS],
      queue: process.env.QUEUE_NAME,
      queueOptions: {
    durable: false
      },
  },
  });
  app.listen(()=>{
  console.log('Microservice is listening')
  });
}
bootstrap();