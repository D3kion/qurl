import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';

import { AuthConfig } from 'src/config/configuration';
import { AuthService } from './auth.service';

@Injectable()
export class MagicStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(Strategy.name);

  constructor(
    private config: ConfigService,
    private auth: AuthService,
  ) {
    super({
      secret: config.get<AuthConfig>('auth').magicSecret,
      callbackUrl: '/auth/magic/callback',
      sendMagicLink: async (destination, href) => {
        this.logger.debug(
          `magic login email for ${destination} with payload: ${href}`,
        );
        // await sendEmail({
        //   to: destination,
        //   body: `Click this link to finish logging in: https://yourcompany.com${href}`
        // })
      },
      verify: async (payload, callback) =>
        callback(null, this.auth.findOrCreate(payload.destionation)),
    });
  }
}
