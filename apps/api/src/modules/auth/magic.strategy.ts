import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';

import { AuthConfig, AppConfig } from 'src/config/configuration';
import { AuthService } from './auth.service';

@Injectable()
export class MagicStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(Strategy.name);

  constructor(
    private config: ConfigService,
    private auth: AuthService,
  ) {
    const baseUrl = config.get<AppConfig>('app').baseUrl;
    const secret = config.get<AuthConfig>('auth').magicSecret;
    super({
      secret,
      jwtOptions: { expiresIn: '5m' },
      callbackUrl: `${baseUrl}/auth/magic`,
      sendMagicLink: async (destination, href) => {
        this.logger.debug(
          `magic login email for ${destination} with payload: ${href}`,
        );
        // TODO
        // await sendEmail({
        //   to: destination,
        //   body: `Click this link to finish logging in: https://yourcompany.com${href}`
        // })
      },
      verify: async (payload, callback) =>
        callback(null, this.validate(payload)),
    });
  }

  async validate(payload: { destination: string }) {
    return this.auth.findOrCreate(payload.destination);
  }
}
