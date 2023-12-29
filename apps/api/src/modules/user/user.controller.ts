import { Controller, Get, Body, Patch, Delete } from '@nestjs/common';

import { User } from 'src/domain/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  me(): Promise<User> {
    // return this.userService.findOne({ id: +id });
    return {} as any;
  }

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
