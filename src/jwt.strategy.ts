// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConfig } from './jwt.config';
import { UserAdapter } from './user.adapter';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userAdapter: UserAdapter, private readonly jwtConfig: JwtConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.secretOrPrivateKey,
      algorithms: [jwtConfig.algorithm],
    });
  }

  async validate(payload: any) {
    const user = await this.userAdapter.authenticate(payload.username, payload.password);
    if (!user) {
      return null;
    }
    return user;
  }
}
