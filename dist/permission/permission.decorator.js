"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredPermissions = exports.PERMISSIONS_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.PERMISSIONS_KEY = 'permissions';
const RequiredPermissions = (...permissions) => (0, common_1.SetMetadata)(exports.PERMISSIONS_KEY, permissions);
exports.RequiredPermissions = RequiredPermissions;
//# sourceMappingURL=permission.decorator.js.map