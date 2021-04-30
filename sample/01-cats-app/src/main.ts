import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); //useGlobalPipes => 모든 router에 pipe의 특징이 변경.

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`); //nestjs => Future === Promise
}
bootstrap();
