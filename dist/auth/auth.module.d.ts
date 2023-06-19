import { DynamicModule } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
export declare class AuthorizationModule {
    static register(SignInDto: SignInDto): DynamicModule;
}
