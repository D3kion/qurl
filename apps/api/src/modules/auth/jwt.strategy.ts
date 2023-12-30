import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthConfig } from 'src/config/configuration';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private config: ConfigService,
    private auth: AuthService,
  ) {
    const secret = config.get<AuthConfig>('auth').jwtSecret;
    super({
      secretOrKey: secret,
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: { email: string }) {
    return this.auth.findOne(payload.email);
  }
}
