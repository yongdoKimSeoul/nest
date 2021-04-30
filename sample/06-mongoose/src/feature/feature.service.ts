import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FeatureService {
  constructor(private configService: ConfigService) {
    //ConfigService는 nestjs/config를 가져오는 형태임.
    //configService.get()메서드를 사용 하여 변수 이름을 전달하여 간단한 환경 변수를 가져옴.
    const dbUser = this.configService.get<string>('DATABASE_USER');
    //database.host가 없다면 localhost'을 사용하라는 의미.
    const dbHost = this.configService.get<string>('database.host', 'localhost');

    console.log(dbUser);
    console.log(dbHost);
  }
}
