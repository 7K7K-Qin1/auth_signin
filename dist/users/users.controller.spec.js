"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const users_controller_1 = require("./users.controller");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const prisma_service_1 = require("../prisma.service");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("./users.service");
const permission_enum_1 = require("../permission/permission.enum");
describe('UsersController', () => {
    let controller;
    let service;
    let mongod;
    let prisma;
    beforeAll(async () => {
        mongod = await mongodb_memory_server_1.MongoMemoryReplSet.create({
            replSet: { count: 1, storageEngine: 'wiredTiger' },
        });
    });
    afterEach(async () => {
        await prisma.user.deleteMany();
    });
    afterAll(async () => {
        await mongod.stop();
    });
    beforeEach(async () => {
        process.env.DATABASE_URL = mongod.getUri('test');
        const module = await testing_1.Test.createTestingModule({
            controllers: [users_controller_1.UsersController],
            providers: [prisma_service_1.PrismaService, users_service_1.UsersService],
            imports: [
                jwt_1.JwtModule.register({
                    global: true,
                    secret: 'secret',
                    signOptions: { expiresIn: '18000s' },
                }),
            ],
        }).compile();
        controller = module.get(users_controller_1.UsersController);
        prisma = module.get(prisma_service_1.PrismaService);
        service = module.get(users_service_1.UsersService);
    });
    it('should be list', async () => {
        const result = await controller.list(1);
        expect(result.total).toBe(0);
    });
    it('should be list', async () => {
        await service.create({
            name: '1',
            password: '2',
        });
        await service.create({
            name: '2',
            password: '2',
        });
        await service.create({
            name: '3',
            password: '2',
        });
        const result = await controller.list(1);
        expect(result.total).toBe(3);
    });
    it('should be updated', async () => {
        const new_user = await prisma.user.create({
            data: {
                name: 'new_user',
                password: 'changeme',
                permissions: [
                    {
                        name: permission_enum_1.Permission.userRead,
                    },
                ],
            },
        });
        const update_user = await controller.update(new_user.id, {
            name: 'new_user',
            permissions: [
                {
                    name: permission_enum_1.Permission.userWrite,
                },
            ],
        });
        expect(update_user.permissions).toStrictEqual([
            {
                name: permission_enum_1.Permission.userWrite,
            },
        ]);
    });
    it('should not be updated', async () => {
        const new_user = await prisma.user.create({
            data: {
                name: 'new_user',
                password: 'changeme',
                permissions: [
                    {
                        name: permission_enum_1.Permission.userRead,
                    },
                ],
            },
        });
        const update_user = await controller.update(new_user.id, {
            name: 'new_user',
        });
        expect(update_user.permissions).toStrictEqual([
            {
                name: permission_enum_1.Permission.userRead,
            },
        ]);
    });
});
//# sourceMappingURL=users.controller.spec.js.map