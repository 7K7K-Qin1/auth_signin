import { GetPermissionDto } from './get_user.dto';
export declare class UpdateUserDto {
    name?: string;
    permissions?: GetPermissionDto[];
    password?: string;
    wallet?: string;
}
