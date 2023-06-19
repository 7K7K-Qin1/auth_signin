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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpMultipleWithGeneratedPasswordResponse = exports.SignUpWithGeneratedApiKeyResponse = exports.SignUpResponse = exports.SignUpWithMultipleGeneratedPasswordDto = exports.SignUpWithGeneratedAPIDto = exports.SignUpWithGeneratedPasswordDto = exports.SignUpWithGeneratedApiKeyDto = exports.SignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignUpDto {
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
class SignUpWithGeneratedApiKeyDto {
}
exports.SignUpWithGeneratedApiKeyDto = SignUpWithGeneratedApiKeyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpWithGeneratedApiKeyDto.prototype, "username", void 0);
class SignUpWithGeneratedPasswordDto {
}
exports.SignUpWithGeneratedPasswordDto = SignUpWithGeneratedPasswordDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpWithGeneratedPasswordDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SignUpWithGeneratedPasswordDto.prototype, "expiresAt", void 0);
class SignUpWithGeneratedAPIDto {
}
exports.SignUpWithGeneratedAPIDto = SignUpWithGeneratedAPIDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpWithGeneratedAPIDto.prototype, "username", void 0);
class SignUpWithMultipleGeneratedPasswordDto {
}
exports.SignUpWithMultipleGeneratedPasswordDto = SignUpWithMultipleGeneratedPasswordDto;
__decorate([
    (0, class_validator_1.IsArray)({}),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], SignUpWithMultipleGeneratedPasswordDto.prototype, "usernames", void 0);
class SignUpResponse {
}
exports.SignUpResponse = SignUpResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpResponse.prototype, "id", void 0);
class SignUpWithGeneratedApiKeyResponse {
}
exports.SignUpWithGeneratedApiKeyResponse = SignUpWithGeneratedApiKeyResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpWithGeneratedApiKeyResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignUpWithGeneratedApiKeyResponse.prototype, "apikey", void 0);
class signUpMultipleWithGeneratedPasswordResponse {
}
exports.signUpMultipleWithGeneratedPasswordResponse = signUpMultipleWithGeneratedPasswordResponse;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], signUpMultipleWithGeneratedPasswordResponse.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], signUpMultipleWithGeneratedPasswordResponse.prototype, "password", void 0);
//# sourceMappingURL=signUp.dto.js.map