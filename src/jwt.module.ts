// jwt.module.ts
import { DynamicModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtConfig } from './jwt.config';
import { UserAdapter } from './user.adapter';

@Module({})
export class JwtAuthModule {
  static register(userAdapter: UserAdapter, jwtConfig: JwtConfig): DynamicModule {
    return {
      module: JwtAuthModule,
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: jwtConfig.secretOrPrivateKey,
          signOptions: {
            expiresIn: jwtConfig.expiresIn,
            issuer: jwtConfig.issuer,
            audience: jwtConfig.audience,
          },
        }),
      ],
      providers: [JwtStrategy, { provide: 'UserAdapter', useValue: userAdapter }],
      exports: [PassportModule, JwtStrategy],
    };
  }
}
