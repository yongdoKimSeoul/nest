import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { FeatureModule } from './feature/feature.module';
import configuration from '../config/configuration';

@Module({
  imports: [
    //MongoDB는 27017이 기본
    //mongoTest가 없다면 처음에는 생성해준다. 
    FeatureModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mongoTest'),
    CatsModule,
  ],
})
export class AppModule {}
