export enum Permission {
  // 定义基础权限
  superAdmin = 'super_admin',
  admin = 'admin',
  userAll = 'user_all',
  userRead = 'user:read',
  userWrite = 'user:write',
  userEdit = 'user:edit',
  nftRead = 'nft:read',
  nftWrite = 'nft:write',
  nftEdit = 'nft:edit',
  didRead = 'did:read',
  didWrite = 'did:write',
  didEdit = 'did:edit',
  didDelete = 'did:delete',
  userInfo = 'user_info',
  orderInfo = 'order_info',
  productInfo = 'product_info',
  userDID = 'user_did',
  userAdmin = 'user_admin',
  readUser = 'read:user',
  writeUser = 'write:user',
  editUser = 'edit:user',
  deleteUser = 'delete:user',
  nftAdmin = 'nft_admin',
  readNFT = 'read:nft',
  writeNFT = 'write:nft',
  editNFT = 'edit:nft',
  didAdmin = 'did_admin',
  adminReadDID = 'admin:read:did',
  adminWriteDID = 'admin:write:did',
  adminEditDID = 'admin:edit:did',
  adminDeleteDID = 'admin:delete:did',
  itemRead = 'item:read',
  orderRead = 'order:read',
  orderWrite = 'order:write',
  productRead = 'product:read',
  productEdit = 'product:edit',
  productWrite = 'product:write',
  userReadDID = 'user:read:did',
  userWriteDID = 'user:write:did',
  userEditDID = 'user:edit:did',
  userDeleteDID = 'user:delete:did',
}

// 定义包含关系的聚合权限
export const permissionHierarchy = {
  // 1.最高权限
  [Permission.superAdmin]: [Permission.admin, Permission.userAll],

  // 2. 管理员全部权限
  [Permission.admin]: [
    Permission.userAdmin,
    Permission.nftAdmin,
    Permission.didAdmin,
  ],

  // 2.1 Admin——用户管理权限
  [Permission.userAdmin]: [
    Permission.readUser,
    Permission.writeUser,
    Permission.editUser,
    Permission.deleteUser,
  ],

  // 2.2 Admin——NFT管理权限
  [Permission.nftAdmin]: [
    Permission.readNFT,
    Permission.writeNFT,
    Permission.editNFT,
  ],

  // 2.3 Admin——DID管理权限
  [Permission.didAdmin]: [
    Permission.adminReadDID,
    Permission.adminWriteDID,
    Permission.adminEditDID,
    Permission.adminDeleteDID,
  ],

  // 3. 使用者权限
  [Permission.userAll]: [
    Permission.userInfo,
    Permission.orderInfo,
    Permission.productInfo,
    Permission.userDID,
  ],

  // 3.1 个人信息权限
  [Permission.userInfo]: [Permission.userRead, Permission.userEdit],

  // 3.2 用户交易权限
  [Permission.orderInfo]: [
    Permission.itemRead,
    Permission.orderRead,
    Permission.orderWrite,
  ],

  // 3.3 商户管理权限
  [Permission.productInfo]: [
    Permission.productRead,
    Permission.productEdit,
    Permission.productWrite,
  ],

  // 3.4 用户DID权限
  [Permission.userDID]: [
    Permission.userReadDID,
    Permission.userWriteDID,
    Permission.userEditDID,
    Permission.userDeleteDID,
  ],
};

class PermissionTree {}
