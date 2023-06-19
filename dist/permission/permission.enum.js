"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionHierarchy = exports.Permission = void 0;
var Permission;
(function (Permission) {
    Permission["superAdmin"] = "super_admin";
    Permission["admin"] = "admin";
    Permission["userAll"] = "user_all";
    Permission["userRead"] = "user:read";
    Permission["userWrite"] = "user:write";
    Permission["userEdit"] = "user:edit";
    Permission["nftRead"] = "nft:read";
    Permission["nftWrite"] = "nft:write";
    Permission["nftEdit"] = "nft:edit";
    Permission["didRead"] = "did:read";
    Permission["didWrite"] = "did:write";
    Permission["didEdit"] = "did:edit";
    Permission["didDelete"] = "did:delete";
    Permission["userInfo"] = "user_info";
    Permission["orderInfo"] = "order_info";
    Permission["productInfo"] = "product_info";
    Permission["userDID"] = "user_did";
    Permission["userAdmin"] = "user_admin";
    Permission["readUser"] = "read:user";
    Permission["writeUser"] = "write:user";
    Permission["editUser"] = "edit:user";
    Permission["deleteUser"] = "delete:user";
    Permission["nftAdmin"] = "nft_admin";
    Permission["readNFT"] = "read:nft";
    Permission["writeNFT"] = "write:nft";
    Permission["editNFT"] = "edit:nft";
    Permission["didAdmin"] = "did_admin";
    Permission["adminReadDID"] = "admin:read:did";
    Permission["adminWriteDID"] = "admin:write:did";
    Permission["adminEditDID"] = "admin:edit:did";
    Permission["adminDeleteDID"] = "admin:delete:did";
    Permission["itemRead"] = "item:read";
    Permission["orderRead"] = "order:read";
    Permission["orderWrite"] = "order:write";
    Permission["productRead"] = "product:read";
    Permission["productEdit"] = "product:edit";
    Permission["productWrite"] = "product:write";
    Permission["userReadDID"] = "user:read:did";
    Permission["userWriteDID"] = "user:write:did";
    Permission["userEditDID"] = "user:edit:did";
    Permission["userDeleteDID"] = "user:delete:did";
})(Permission || (exports.Permission = Permission = {}));
exports.permissionHierarchy = {
    [Permission.superAdmin]: [Permission.admin, Permission.userAll],
    [Permission.admin]: [
        Permission.userAdmin,
        Permission.nftAdmin,
        Permission.didAdmin,
    ],
    [Permission.userAdmin]: [
        Permission.readUser,
        Permission.writeUser,
        Permission.editUser,
        Permission.deleteUser,
    ],
    [Permission.nftAdmin]: [
        Permission.readNFT,
        Permission.writeNFT,
        Permission.editNFT,
    ],
    [Permission.didAdmin]: [
        Permission.adminReadDID,
        Permission.adminWriteDID,
        Permission.adminEditDID,
        Permission.adminDeleteDID,
    ],
    [Permission.userAll]: [
        Permission.userInfo,
        Permission.orderInfo,
        Permission.productInfo,
        Permission.userDID,
    ],
    [Permission.userInfo]: [Permission.userRead, Permission.userEdit],
    [Permission.orderInfo]: [
        Permission.itemRead,
        Permission.orderRead,
        Permission.orderWrite,
    ],
    [Permission.productInfo]: [
        Permission.productRead,
        Permission.productEdit,
        Permission.productWrite,
    ],
    [Permission.userDID]: [
        Permission.userReadDID,
        Permission.userWriteDID,
        Permission.userEditDID,
        Permission.userDeleteDID,
    ],
};
class PermissionTree {
}
//# sourceMappingURL=permission.enum.js.map