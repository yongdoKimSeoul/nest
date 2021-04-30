import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private helloMessage: string;

  //ConfigService을 받아옴. 
  constructor(configService: ConfigService) {
    this.helloMessage = configService.get('HELLO_MESSAGE');
  }

  getHello(): string {
    return this.helloMessage;
  }
}
