export interface JwtConfig {
    secretOrPrivateKey: string;
    algorithm: string;
    expiresIn: number | string;
    issuer: string;
    audience: string;
}
