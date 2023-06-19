import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { GetPermissionDto } from './get_user.dto';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => GetPermissionDto)
  permissions?: GetPermissionDto[];

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  wallet?: string;
}
