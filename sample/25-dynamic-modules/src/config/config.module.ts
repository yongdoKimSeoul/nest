import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CONFIG_OPTIONS } from './constants';

//옵션 인터페이스 
export interface ConfigModuleOptions {
  folder: string;
}

//복잡해보기이긴 한데, 공식문서를 읽어보면 다 이런식으로 씀. 틀이 정해져있으므로 안심하라고.
@Module({})
export class ConfigModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
