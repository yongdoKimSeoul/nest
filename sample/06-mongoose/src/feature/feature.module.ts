import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import databaseConfig from 'config/database.config';
import { FeatureService } from './feature.service';

@Module({
  imports: [ConfigModule.forRoot({ load: [databaseConfig] })], //ConfigModule은 nestjs/config를 채용 중. 
  providers:[FeatureService]
})
export class FeatureModule {}
