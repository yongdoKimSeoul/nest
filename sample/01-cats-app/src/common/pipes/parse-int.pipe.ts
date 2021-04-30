import {
  BadRequestException,
  PipeTransform,
  Injectable,
  ArgumentMetadata,
} from '@nestjs/common';
import { customHttpExceptionFilter } from '../filters/http-exception.filter';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    console.log("ParseIntPipe",value);
    //abc로 들어오면 parseInt가 안되므로, BadRequestException를 call. 
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
      //throw new customHttpExceptionFilter(); <- 커스텀 형식으로 throw를 호출할 수 있다. 
    }
    return val;
  }
}
