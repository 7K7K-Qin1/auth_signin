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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const permission_enum_1 = require("../permission/permission.enum");
const prisma_service_1 = require("../prisma.service");
const get_pagination_result_1 = require("../utils/get-pagination-result");
const client_1 = require("@prisma/client");
let UsersService = exports.UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page) {
        const [users, count] = await Promise.all([
            this.prisma.user.findMany({
                skip: (page - 1) * config_1.Config.pageSize,
            }),
            this.prisma.user.count(),
        ]);
        return (0, get_pagination_result_1.generatePaginationResult)({
            page: page,
            total: count,
            items: users.map((data) => (Object.assign(Object.assign({}, data), { password: undefined }))),
        });
    }
    async create(data) {
        const user = await this.prisma.user.create({
            data: this.prepareUserObjectToSave(data),
        });
        return {
            id: user.id,
        };
    }
    async createMultiple(data) {
        try {
            const users = await this.prisma.user.createMany({
                data: data.map((user) => this.prepareUserObjectToSave(user)),
            });
            return users;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('One of the users already exists.');
            }
            throw error;
        }
    }
    async findOneByName(name) {
        const user = await this.prisma.user.findUnique({
            where: {
                name,
            },
        });
        if (!user) {
            return null;
        }
        return user;
    }
    async findOneById(userId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return Object.assign(Object.assign({}, user), { password: undefined });
    }
    async searchByName(searchName) {
        const users = await this.prisma.user.findRaw({
            filter: {
                name: {
                    $regex: '.*' + searchName + '.*',
                },
            },
            options: {
                projection: { password: false },
            },
        });
        return users;
    }
    async updateById(id, data) {
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                name: data.name,
                password: data.password,
                permissions: data.permissions === undefined
                    ? undefined
                    : {
                        set: data.permissions,
                    },
                wallet: data.wallet,
            },
        });
    }
    prepareUserObjectToSave(data) {
        const user = {
            name: data.name,
            password: data.password,
            permissions: [
                {
                    name: permission_enum_1.Permission.userRead,
                },
            ],
        };
        if (data.apikey) {
            user['APIKeys'] = {
                create: {
                    status: client_1.ApiKeyStatus.ACTIVE,
                    key: data.apikey,
                },
            };
        }
        return user;
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map