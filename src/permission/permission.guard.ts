import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../permission/permission.decorator';
import { Permission } from '../permission/permission.enum';
import { GetPermissionDto } from '../users/dto/get_user.dto';

@Injectable()
/**
 * Guard that checks if the user has the required permissions
 * To use this guard, first add the `@UseGuards(AuthGuard, PermissionsGuard)`
 * decorator to the controller or method you want to protect.
 * And then add the `@RequiredPermissions` decorator to the controller or method
 * with the required permissions.
 */
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredPermissions) {
      return true;
    }
    const { user } = context
      .switchToHttp()
      .getRequest<{ user: { permissions: GetPermissionDto[] } }>();
    return requiredPermissions.some((permission) =>
      user.permissions?.map((p) => p.name).includes(permission),
    );
  }
}
