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
exports.GetApiKeyUserDto = exports.GetUserWithWalletDto = exports.GetPermissionDto = exports.GetUserDto = void 0;
const permission_enum_1 = require("../../permission/permission.enum");
const class_validator_1 = require("class-validator");
class GetUserDto {
}
exports.GetUserDto = GetUserDto;
class GetPermissionDto {
}
exports.GetPermissionDto = GetPermissionDto;
__decorate([
    (0, class_validator_1.IsEnum)(permission_enum_1.Permission),
    __metadata("design:type", String)
], GetPermissionDto.prototype, "name", void 0);
class GetUserWithWalletDto {
}
exports.GetUserWithWalletDto = GetUserWithWalletDto;
class GetApiKeyUserDto {
}
exports.GetApiKeyUserDto = GetApiKeyUserDto;
//# sourceMappingURL=get_user.dto.js.map