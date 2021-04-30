import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';
//class Validation을 설치할 수도 있다.
export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
