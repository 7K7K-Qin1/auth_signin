"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("./auth.guard");
const auth_service_1 = require("./auth.service");
const signIn_dto_1 = require("./dto/signIn.dto");
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signUpOptions() {
        return {
            allowMethods: ['POST', 'OPTIONS', 'PATCH', 'GET'],
        };
    }
    signIn(body) {
        return this.authService.signIn(body.username, body.password);
    }
};
__decorate([
    (0, common_1.Options)('signUp'),
    (0, common_1.Options)('signUp/generate'),
    (0, common_1.Options)('signUp/multiple/generate'),
    (0, common_1.Options)('signIn'),
    (0, common_1.Options)('resetPassword/:username'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Check if user has permission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signUpOptions", null);
__decorate([
    (0, common_1.Post)('signIn'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Sign in with username and password',
        type: signIn_dto_1.SignInResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Sign in with username and password' }),
    (0, swagger_1.ApiBearerAuth)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signIn_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map