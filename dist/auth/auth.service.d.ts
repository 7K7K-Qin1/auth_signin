import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInResponse } from './dto/signIn.dto';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<SignInResponse>;
}
