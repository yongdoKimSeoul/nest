import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.register({ folder: './config' })], //./config폴더의 development.env파일의 내용을 가져옴. 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
