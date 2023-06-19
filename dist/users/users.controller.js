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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const permission_guard_1 = require("../permission/permission.guard");
const permission_decorator_1 = require("../permission/permission.decorator");
const permission_enum_1 = require("../permission/permission.enum");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const update_user_dto_1 = require("./dto/update_user.dto");
const get_pagination_result_1 = require("../utils/get-pagination-result");
const search_user_dto_1 = require("./dto/search_user.dto");
const get_user_dto_1 = require("./dto/get_user.dto");
let UsersController = exports.UsersController = class UsersController {
    constructor(service) {
        this.service = service;
    }
    async list(page = 1) {
        return this.service.findAll(page);
    }
    async update(id, data) {
        return this.service.updateById(id, data);
    }
    async searchByName(name) {
        return this.service.searchByName(name);
    }
    async getById(userId) {
        console.log(userId);
        const user = await this.service.findOneById(userId);
        return user;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, permission_guard_1.PermissionsGuard),
    (0, permission_decorator_1.RequiredPermissions)(permission_enum_1.Permission.admin),
    (0, swagger_1.ApiOperation)({
        summary: 'List all users',
        description: 'Only admin is authorized',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'apikey',
        description: 'access token got from /auth/signIn',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of users',
        type: get_pagination_result_1.GetPaginationResult,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'user:read and user:write are unauthorized',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        type: Number,
        required: false,
        description: 'Page number',
    }),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "list", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, permission_guard_1.PermissionsGuard),
    (0, permission_decorator_1.RequiredPermissions)(permission_enum_1.Permission.admin),
    (0, swagger_1.ApiOperation)({
        summary: 'Update information of user',
        description: 'Only admin is authorized',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'apikey',
        description: 'access token got from /auth/signIn',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'update info of user successfully',
        type: update_user_dto_1.UpdateUserDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'user:read and user:write are unauthorized',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: String,
        required: true,
        description: 'user id',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':name'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, permission_guard_1.PermissionsGuard),
    (0, permission_decorator_1.RequiredPermissions)(permission_enum_1.Permission.admin),
    (0, swagger_1.ApiOperation)({
        summary: 'Search user by name',
        description: 'Support full-text search; Only admin is authorized',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'apikey',
        description: 'access token got from /auth/signIn',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'search result',
        type: search_user_dto_1.SearchUserDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'user:read and user:write are unauthorized',
    }),
    (0, swagger_1.ApiParam)({
        name: 'name',
        type: String,
        required: true,
        description: 'user name',
    }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "searchByName", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, permission_guard_1.PermissionsGuard),
    (0, permission_decorator_1.RequiredPermissions)(permission_enum_1.Permission.admin),
    (0, swagger_1.ApiOperation)({
        summary: 'Get user by id',
        description: 'Only admin is authorized',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'apikey',
        description: 'access token got from /auth/signIn',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'get one user successfully',
        type: get_user_dto_1.GetUserDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'user:read and user:write are unauthorized',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        type: String,
        required: true,
        description: 'user id',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getById", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map