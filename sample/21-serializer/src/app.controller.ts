import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { RoleEntity } from './entities/role.entity';
import { UserEntity } from './entities/user.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor) //인터셉터, 직렬화 
export class AppController {
  @Get()
  findOne(): UserEntity {
    return new UserEntity({
      id: 1,
      firstName: 'Kamil2',
      lastName: 'Mysliwiec3',
      password: 'password',
      role: new RoleEntity({ id: 1, name: 'admin' }),
    });
  }
}
