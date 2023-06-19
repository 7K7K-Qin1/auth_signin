import { AuthService } from './auth.service';
import { SignInDto, SignInResponse } from './dto/signIn.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUpOptions(): {
        allowMethods: string[];
    };
    signIn(body: SignInDto): Promise<SignInResponse>;
}
