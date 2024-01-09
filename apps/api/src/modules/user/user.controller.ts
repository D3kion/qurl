import { Controller, Body, Patch, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from 'src/domain/user.model';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor() {}

  @Patch()
  update(@Body() payload: Partial<User>): Promise<User> {
    // return this.userService.update({
    //   where: { id: +id },
    //   data: payload,
    // });
    return payload as any;
  }

  @Delete('')
  remove(): Promise<void> {
    // return this.userService.remove({ id: +id });
    return;
  }
}
