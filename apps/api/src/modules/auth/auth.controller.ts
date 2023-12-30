import { Body, Controller, Post, Req, Res } from '@nestjs/common';
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

  @Post('oauth')
  signInWithOauth() {
    // return this.authService.signInWithMagicLink(payload.email);
  }
}
