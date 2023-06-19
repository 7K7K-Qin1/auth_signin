import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SignInResponse } from './dto/signIn.dto';
// import { OptionalServices } from '../interfaces/optional-services.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    // private optionalServices: OptionalServices,
  ) {}

  async signIn(username: string, pass: string): Promise<SignInResponse> {
    const user = await this.usersService.findOneByName(username);
    if (!user) {
      throw new UnauthorizedException();
    }

    // 💡 We're using bcrypt to compare the password
    // with the hashed password stored in the database
    if (!bcrypt.compareSync(pass, user.password)) {
      throw new UnauthorizedException();
    }
    // 💡 We're removing the password from the user object
    const { password, ...result } = user;
    return {
      access_token: await this.jwtService.signAsync(result),
    };
  // 添加其他需要的方法

  // async register(username: string, password: string): Promise<User> {
  //   const newUser = await this.usersService.create({ username, password });
  //   return newUser;
  // }

  // 根据外部配置决定是否注册可选的服务
  // async registerOptionalServices(): Promise<void> {
  //   if (this.optionalServices.enableFeature1) {
  //     // 注册可选的服务 Feature1Service
  //   }

  //   if (this.optionalServices.enableFeature2) {

  //   }

  }
}