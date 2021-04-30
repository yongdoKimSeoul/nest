import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    //MongoDB는 27017이 기본
    //mongoTest가 없다면 처음에는 생성해준다. 
    MongooseModule.forRoot('mongodb://localhost:27017/mongoTest'),
    CatsModule,
  ],
})
export class AppModule {}
