import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

@Module({
  //CoreModule에는 인터셉터 
  imports: [CoreModule, CatsModule],
})
export class AppModule {}
