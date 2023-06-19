"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthorizationModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../config");
const users_service_1 = require("../users/users.service");
const prisma_service_1 = require("../prisma.service");
let AuthorizationModule = exports.AuthorizationModule = AuthorizationModule_1 = class AuthorizationModule {
    static register(SignInDto) {
        return {
            module: AuthorizationModule_1,
            imports: [
                jwt_1.JwtModule.register({
                    global: true,
                    secret: config_1.Config.jwtSecret,
                    signOptions: { expiresIn: '18000s' },
                }),
            ],
            providers: [
                {
                    provide: 'SignInDto',
                    useValue: SignInDto,
                },
                users_service_1.UsersService,
                prisma_service_1.PrismaService,
            ],
            exports: [users_service_1.UsersService],
        };
    }
};
exports.AuthorizationModule = AuthorizationModule = AuthorizationModule_1 = __decorate([
    (0, common_1.Module)({})
], AuthorizationModule);
//# sourceMappingURL=auth.module.js.map