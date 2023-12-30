import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { MagicStrategy } from './magic.strategy';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private auth: AuthService,
    private magic: MagicStrategy,
  ) {}

  @Post('magic')
  async signInWithMagicLink(
    @Req() req,
    @Res() res,
    @Body('destination') email,
  ) {
    await this.auth.findOrCreate(email);
    return this.magic.send(req, res);
  }

  @UseGuards(AuthGuard('magiclogin'))
  @Get('magic')
  async verifyMagicLogin(@Req() req) {
    return this.auth.createJWT(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('test')
  async test() {
    return 'test';
  }
}
