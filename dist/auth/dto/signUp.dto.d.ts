export declare class SignUpDto {
    username: string;
    password: string;
}
export declare class SignUpWithGeneratedApiKeyDto {
    username: string;
}
export declare class SignUpWithGeneratedPasswordDto {
    username: string;
    expiresAt: Date;
}
export declare class SignUpWithGeneratedAPIDto {
    username: string;
}
export declare class SignUpWithMultipleGeneratedPasswordDto {
    usernames: string[];
}
export declare class SignUpResponse {
    id: string;
}
export declare class SignUpWithGeneratedApiKeyResponse {
    id: string;
    apikey: string;
}
export declare class signUpMultipleWithGeneratedPasswordResponse {
    name: string;
    password: string;
}
