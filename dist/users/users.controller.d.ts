import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update_user.dto';
import { GetPaginationResult } from '../utils/get-pagination-result';
import { SearchUserDto } from './dto/search_user.dto';
import { GetUserDto } from './dto/get_user.dto';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    list(page?: number): Promise<GetPaginationResult<import("./dto/list_user.dto").ListUserDto>>;
    update(id: string, data: UpdateUserDto): Promise<import("@prisma/client").User>;
    searchByName(name: string): Promise<SearchUserDto[]>;
    getById(userId: string): Promise<GetUserDto>;
}
