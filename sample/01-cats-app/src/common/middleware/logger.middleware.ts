import { Injectable, NestMiddleware } from '@nestjs/common';

//인터셉트가 쓰여지면서 미들웨어를 쓸 필요는 없어짐. 
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Request...`);
    next();
  }
}
