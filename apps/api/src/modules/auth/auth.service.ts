import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/domain/user.model';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private users: UserService,
    private jwt: JwtService,
  ) {}

  async findOrCreate(email: string): Promise<User> {
    let user = await this.users.findOne({ email });
    if (!user) user = await this.users.create({ email });
    return user;
  }

  async findOne(email: string): Promise<User | null> {
    return this.users.findOne({ email });
  }

  async createJWT(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      // name: user.name,
      // verified: user.emailVerified,
      // image: user.image,
    };
    return {
      access_token: await this.jwt.signAsync(payload),
    };
  }
}
