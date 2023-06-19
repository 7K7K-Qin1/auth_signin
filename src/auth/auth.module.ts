  // import { Module } from '@nestjs/common';
  // import { AuthController } from './auth.controller';
  // import { AuthService } from './auth.service';
  // import { JwtModule } from '@nestjs/jwt';
  // import { UsersService } from '../users/users.service';
  // import { PrismaService } from '../prisma.service';
  // import { Config } from '../config';
  // // import { DidDomainsService } from '../did-domains/did-domains.service';

  // @Module({
  //   imports: [
  //     JwtModule.register({
  //       global: true,
  //       secret: Config.jwtSecret,
  //       signOptions: { expiresIn: '18000s' },
  //     }),
  //   ],
  //   controllers: [AuthController],
  //   providers: [AuthService, UsersService, PrismaService],
  // })
  // export class AuthModule {}
import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { Config } from '../config';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
@Module({})
export class AuthorizationModule {
    static register(SignInDto: SignInDto): DynamicModule {
        return {
            module: AuthorizationModule,
            imports: [
                  JwtModule.register({
                    global: true,
                    secret: Config.jwtSecret,
                    signOptions: { expiresIn: '18000s' },
                  }),
                ],
            providers: [
                {
                    provide: 'SignInDto',
                    useValue: SignInDto,
                },
                UsersService,
                PrismaService,
            ],
            exports: [UsersService],
        };
    }
}
