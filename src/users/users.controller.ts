import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { PermissionsGuard } from '../permission/permission.guard';
import { RequiredPermissions } from '../permission/permission.decorator';
import { Permission } from '../permission/permission.enum';
import { UsersService } from './users.service';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update_user.dto';
import { GetPaginationResult } from '../utils/get-pagination-result';
import { SearchUserDto } from './dto/search_user.dto';
import { GetUserDto } from './dto/get_user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  @UseGuards(AuthGuard, PermissionsGuard)
  @RequiredPermissions(Permission.admin)
  @ApiOperation({
    summary: 'List all users',
    description: 'Only admin is authorized',
  })
  @ApiHeader({
    name: 'apikey',
    description: 'access token got from /auth/signIn',
    required: true,
  })
  @ApiOkResponse({
    description: 'List of users',
    type: GetPaginationResult,
  })
  @ApiResponse({
    status: 401,
    description: 'user:read and user:write are unauthorized',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number',
  })
  async list(@Query('page', ParseIntPipe) page: number = 1) {
    return this.service.findAll(page);
  }

  @Patch(':id')
  @UseGuards(AuthGuard, PermissionsGuard)
  @RequiredPermissions(Permission.admin)
  @ApiOperation({
    summary: 'Update information of user',
    description: 'Only admin is authorized',
  })
  @ApiHeader({
    name: 'apikey',
    description: 'access token got from /auth/signIn',
    required: true,
  })
  @ApiOkResponse({
    description: 'update info of user successfully',
    type: UpdateUserDto,
  })
  @ApiResponse({
    status: 401,
    description: 'user:read and user:write are unauthorized',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'user id',
  })
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.service.updateById(id, data);
  }

  @Get(':name')
  @UseGuards(AuthGuard, PermissionsGuard)
  @RequiredPermissions(Permission.admin)
  @ApiOperation({
    summary: 'Search user by name',
    description: 'Support full-text search; Only admin is authorized',
  })
  @ApiHeader({
    name: 'apikey',
    description: 'access token got from /auth/signIn',
    required: true,
  })
  @ApiOkResponse({
    description: 'search result',
    type: SearchUserDto,
  })
  @ApiResponse({
    status: 401,
    description: 'user:read and user:write are unauthorized',
  })
  @ApiParam({
    name: 'name',
    type: String,
    required: true,
    description: 'user name',
  })
  async searchByName(@Param('name') name: string) {
    return this.service.searchByName(name);
  }

  @Get(':id')
  @UseGuards(AuthGuard, PermissionsGuard)
  @RequiredPermissions(Permission.admin)
  @ApiOperation({
    summary: 'Get user by id',
    description: 'Only admin is authorized',
  })
  @ApiHeader({
    name: 'apikey',
    description: 'access token got from /auth/signIn',
    required: true,
  })
  @ApiOkResponse({
    description: 'get one user successfully',
    type: GetUserDto,
  })
  @ApiResponse({
    status: 401,
    description: 'user:read and user:write are unauthorized',
  })
  @ApiQuery({
    name: 'id',
    type: String,
    required: true,
    description: 'user id',
  })
  async getById(@Param('id') userId: string) {
    console.log(userId);
    const user = await this.service.findOneById(userId);
    return user;
  }
}
