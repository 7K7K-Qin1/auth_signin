"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("./users.service");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const prisma_service_1 = require("../prisma.service");
const permission_enum_1 = require("../permission/permission.enum");
describe('UsersService', () => {
    let service;
    let mongod;
    let prisma;
    beforeAll(async () => {
        mongod = await mongodb_memory_server_1.MongoMemoryReplSet.create({
            replSet: { count: 1, storageEngine: 'wiredTiger' },
        });
    });
    afterAll(async () => {
        await mongod.stop();
    });
    beforeEach(async () => {
        process.env.DATABASE_URL = mongod.getUri('test');
        const module = await testing_1.Test.createTestingModule({
            providers: [users_service_1.UsersService, prisma_service_1.PrismaService],
        }).compile();
        service = module.get(users_service_1.UsersService);
        prisma = module.get(prisma_service_1.PrismaService);
    });
    afterEach(async () => {
        await prisma.user.deleteMany();
    });
    it('should be able to sign up and find user', async () => {
        await service.create({ name: 'test', password: 'test' });
        const user = await service.findOneByName('test');
        expect(user.name).toBe('test');
    });
    it('should not be able to sign up and find user', async () => {
        await service.create({ name: 'test', password: 'test' });
        const user = await service.findOneByName('tes1');
        expect(user).toBeNull();
    });
    it('should be able to list users', async () => {
        await service.create({ name: 'test', password: 'test' });
        const users = await service.findAll(1);
        expect(users.total).toBe(1);
        expect(users.totalPage).toBe(1);
    });
    it('should be able to update users', async () => {
        await service.create({ name: 'test', password: 'test' });
        const user = await service.findOneByName('test');
        const user1 = await service.updateById(user.id, {
            permissions: [{ name: permission_enum_1.Permission.userWrite }],
        });
        expect(user1.permissions).toStrictEqual([
            {
                name: permission_enum_1.Permission.userWrite,
            },
        ]);
        expect(user1.password).toBe(user1.password);
    });
    it('should be able find users by name', async () => {
        const createdUser = await service.create({
            name: 'test',
            password: 'test',
        });
        const user = await service.findOneByName('test');
        expect(user.name).toBe('test');
    });
    it('should be able to search user by name', async () => {
        await service.create({
            name: 'test',
            password: 'test',
        });
        const users = await service.searchByName('te');
        expect(users.length).toBe(1);
        const users1 = await service.searchByName('te1');
        expect(users1.length).toBe(0);
        const users2 = await service.searchByName('test');
        expect(users2.length).toBe(1);
    });
    it('should be able to find user by id', async () => {
        const createdUser = await service.create({
            name: 'test',
            password: 'test',
        });
        const user = await service.findOneById(createdUser.id);
        expect(user.name).toBe('test');
    });
});
//# sourceMappingURL=users.service.spec.js.map