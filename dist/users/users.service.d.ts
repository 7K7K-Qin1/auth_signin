import { Permission } from '../permission/permission.enum';
import { PrismaService } from '../prisma.service';
import { GetPaginationResult } from '../utils/get-pagination-result';
import { CreateUserDto } from './dto/create_user.dto';
import { GetUserDto } from './dto/get_user.dto';
import { ListUserDto } from './dto/list_user.dto';
import { SearchUserDto } from './dto/search_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(page: number): Promise<GetPaginationResult<ListUserDto>>;
    create(data: CreateUserDto): Promise<{
        id: string;
    }>;
    createMultiple(data: CreateUserDto[]): Promise<import("@prisma/client").Prisma.BatchPayload>;
    findOneByName(name: string): Promise<GetUserDto>;
    findOneById(userId: string): Promise<GetUserDto>;
    searchByName(searchName: string): Promise<SearchUserDto[]>;
    updateById(id: string, data: UpdateUserDto): Promise<import("@prisma/client").User>;
    prepareUserObjectToSave(data: CreateUserDto): {
        name: string;
        password: string;
        permissions: {
            name: Permission;
        }[];
    };
}
