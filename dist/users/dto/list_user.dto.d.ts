import { GetPermissionDto, GetUserWithWalletDto } from './get_user.dto';
export declare class ListUserDto {
    id: string;
    name: string;
    password: string;
    didDomain?: string;
    permissions: GetPermissionDto[];
    wallet: GetUserWithWalletDto;
}
