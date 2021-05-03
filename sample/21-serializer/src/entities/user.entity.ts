import { Exclude, Expose, Transform } from 'class-transformer';
import { RoleEntity } from './role.entity';

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;


  //@Expose는 return 값에 없어도 추가해서 준다. 
  //"fullName": "Kamil2 Mysliwiec3",
  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  //  "testFunction": "this is as test function what i have to do now"
  @Expose()
  get testFunction(): string {
    return 'this is as test function what i have to do now';
  }


  //RoleEntity의 일부만을 가져오고 싶은 경우 @Transform을 사용
  //value.name -> "role":"admin"
  //value.id -> "role":"1"
  @Transform(({ value }) => value.name)
  role: RoleEntity;

  //생성자에서 받아주는 곳 
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
