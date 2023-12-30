import {
  Controller,
  Get,
  Body,
  Patch,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';

import { User } from 'src/domain/user.model';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  me(@Req() req): Promise<User> {
    return this.userService.findOne({ id: req.user.id });
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
