import { BadRequestException, Injectable } from '@nestjs/common';
import { Config } from '../config';
import { Permission } from '../permission/permission.enum';
import { PrismaService } from '../prisma.service';
import {
  generatePaginationResult,
  GetPaginationResult,
} from '../utils/get-pagination-result';
import { CreateUserDto } from './dto/create_user.dto';
import { GetUserDto } from './dto/get_user.dto';
import { ListUserDto } from './dto/list_user.dto';
import { SearchUserDto } from './dto/search_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { ApiKeyStatus } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page: number): Promise<GetPaginationResult<ListUserDto>> {
    const [users, count] = await Promise.all([
      this.prisma.user.findMany({
        skip: (page - 1) * Config.pageSize,
      }),
      this.prisma.user.count(),
    ]);

    return generatePaginationResult({
      page: page,
      total: count,
      // remove password from the response
      items: (users as unknown as ListUserDto[]).map((data) => ({
        ...data,
        password: undefined,
      })),
    });
  }

  /**
   * Create a new user
   * @param data User data
   */
  async create(data: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: this.prepareUserObjectToSave(data),
    });
    return {
      id: user.id,
    };
  }

  async createMultiple(data: CreateUserDto[]) {
    try {
      const users = await this.prisma.user.createMany({
        data: data.map((user) => this.prepareUserObjectToSave(user)),
      });
      return users;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('One of the users already exists.');
      }
      throw error;
    }
  }

  /**
   * Find a user by name
   * @param name Name of the user
   * @returns Get user dto
   */
  async findOneByName(name: string): Promise<GetUserDto> {
    const user = await this.prisma.user.findUnique({
      where: {
        name,
      },
    });

    if (!user) {
      return null;
    }

    return user as unknown as GetUserDto;
  }

  async findOneById(userId: string): Promise<GetUserDto> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return {
      ...user,
      password: undefined,
    } as any as GetUserDto;
  }

  async searchByName(searchName: string): Promise<SearchUserDto[]> {
    const users = await this.prisma.user.findRaw({
      filter: {
        name: {
          // part of name
          $regex: '.*' + searchName + '.*',
        },
      },
      options: {
        projection: { password: false },
      },
    });
    return users as any;
  }

  async updateById(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        password: data.password,
        // permissions: data.permissions !== undefined && {
        //   set: data.permissions as any,
        // },
        permissions:
          data.permissions === undefined
            ? undefined
            : {
                set: data.permissions as any,
              },
        wallet: data.wallet,
      },
    });
  }

  prepareUserObjectToSave(data: CreateUserDto) {
    const user = {
      name: data.name,
      password: data.password,
      permissions: [
        {
          name: Permission.userRead,
        },
      ],
    };

    if (data.apikey) {
      user['APIKeys'] = {
        create: {
          status: ApiKeyStatus.ACTIVE,
          key: data.apikey,
        },
      };
    }
    return user;
  }
}
