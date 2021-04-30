import { IsInt, IsString } from 'class-validator';

//class-validator';를 설치해서 이 변수들과 일치해야만 통과시켜주도록 설치.
//Postman으로 보낼 경우 Body -> raw에서 직접 쳐서 넣어야   @IsInt()에서 막히지 않고 보내진다. 
export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
