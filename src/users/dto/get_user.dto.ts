import { Permission } from '../../permission/permission.enum';
import { IsEnum } from 'class-validator';

export class GetUserDto {
  id: string;
  name: string;
  password: string;
  didDomain?: string;
  permissions: GetPermissionDto[];
  wallet: GetUserWithWalletDto;
}

export class GetPermissionDto {
  @IsEnum(Permission)
  name: Permission;
}

export class GetUserWithWalletDto {
  walletAddress: string;
  privateKey: string;
}

export class GetApiKeyUserDto {
  id: string;
  name: string;
  permissions: GetPermissionDto[];
}
