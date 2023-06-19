import { DynamicModule } from '@nestjs/common';
import { JwtConfig } from './jwt.config';
import { UserAdapter } from './user.adapter';
export declare class JwtAuthModule {
    static register(userAdapter: UserAdapter, jwtConfig: JwtConfig): DynamicModule;
}
