import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/domain/user.model';
import { UserService } from '../user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { MagicStrategy } from './magic.strategy';

@Injectable()
export class AuthService {
  constructor(
    private users: UserService,
    // private jwt: JwtService,
  ) {}

  // async signInWithMagicLink(email: string) {
  //   const user = await this.users.findOne({ email });
  //   const payload = {
  //     sub: user.id,
  //     email: user.email,
  //     name: user.name,
  //     verified: user.emailVerified,
  //     image: user.image,
  //   };
  //   return {
  //     accessToken: await this.jwt.signAsync(payload),
  //   };
  // }

  // async signInWithOauth(): Promise<User> {
  //   // const user = await this.userSrv.findOne({ email });
  //   // TODO: Generate a JWT and return it here
  //   // instead of the user object
  //   return {} as any;
  // }

  async findOrCreate(email: string) {
    let user = await this.users.findOne({ email });
    if (!user) user = await this.users.create({ email });
    return user;
  }
}
