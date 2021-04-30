import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

//HttpException을 쓰긴 했지만, 여긴 커스텀으로 유지하기 위해 사용하는 방식이므로 꼭 이걸 쓰지 않아도 됨. 
@Catch(HttpException)
export class customHttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();

    //HttpException
    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
