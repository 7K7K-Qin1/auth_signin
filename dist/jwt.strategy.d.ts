import { JwtConfig } from './jwt.config';
import { UserAdapter } from './user.adapter';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userAdapter;
    private readonly jwtConfig;
    constructor(userAdapter: UserAdapter, jwtConfig: JwtConfig);
    validate(payload: any): Promise<import("./user.adapter").User & {
        token: string;
    }>;
}
export {};
