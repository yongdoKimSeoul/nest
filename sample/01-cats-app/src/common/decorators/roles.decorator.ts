import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

//SetMetadata는 커스텀@ 을 만들어서 설정하는게 좋다. 
