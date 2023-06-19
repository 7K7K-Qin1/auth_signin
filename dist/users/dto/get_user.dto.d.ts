import { Permission } from '../../permission/permission.enum';
export declare class GetUserDto {
    id: string;
    name: string;
    password: string;
    didDomain?: string;
    permissions: GetPermissionDto[];
    wallet: GetUserWithWalletDto;
}
export declare class GetPermissionDto {
    name: Permission;
}
export declare class GetUserWithWalletDto {
    walletAddress: string;
    privateKey: string;
}
export declare class GetApiKeyUserDto {
    id: string;
    name: string;
    permissions: GetPermissionDto[];
}
