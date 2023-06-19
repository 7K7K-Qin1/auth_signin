"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JwtAuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
let JwtAuthModule = exports.JwtAuthModule = JwtAuthModule_1 = class JwtAuthModule {
    static register(userAdapter, jwtConfig) {
        return {
            module: JwtAuthModule_1,
            imports: [
                passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
                jwt_1.JwtModule.register({
                    secret: jwtConfig.secretOrPrivateKey,
                    signOptions: {
                        expiresIn: jwtConfig.expiresIn,
                        issuer: jwtConfig.issuer,
                        audience: jwtConfig.audience,
                    },
                }),
            ],
            providers: [jwt_strategy_1.JwtStrategy, { provide: 'UserAdapter', useValue: userAdapter }],
            exports: [passport_1.PassportModule, jwt_strategy_1.JwtStrategy],
        };
    }
};
exports.JwtAuthModule = JwtAuthModule = JwtAuthModule_1 = __decorate([
    (0, common_1.Module)({})
], JwtAuthModule);
//# sourceMappingURL=jwt.module.js.map