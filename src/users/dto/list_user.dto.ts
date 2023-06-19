import { GetPermissionDto, GetUserWithWalletDto } from './get_user.dto';

export class ListUserDto {
  id: string;
  name: string;
  password: string;
  didDomain?: string;
  permissions: GetPermissionDto[];
  wallet: GetUserWithWalletDto;
}
