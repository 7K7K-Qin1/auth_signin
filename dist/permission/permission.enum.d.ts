export declare enum Permission {
    superAdmin = "super_admin",
    admin = "admin",
    userAll = "user_all",
    userRead = "user:read",
    userWrite = "user:write",
    userEdit = "user:edit",
    nftRead = "nft:read",
    nftWrite = "nft:write",
    nftEdit = "nft:edit",
    didRead = "did:read",
    didWrite = "did:write",
    didEdit = "did:edit",
    didDelete = "did:delete",
    userInfo = "user_info",
    orderInfo = "order_info",
    productInfo = "product_info",
    userDID = "user_did",
    userAdmin = "user_admin",
    readUser = "read:user",
    writeUser = "write:user",
    editUser = "edit:user",
    deleteUser = "delete:user",
    nftAdmin = "nft_admin",
    readNFT = "read:nft",
    writeNFT = "write:nft",
    editNFT = "edit:nft",
    didAdmin = "did_admin",
    adminReadDID = "admin:read:did",
    adminWriteDID = "admin:write:did",
    adminEditDID = "admin:edit:did",
    adminDeleteDID = "admin:delete:did",
    itemRead = "item:read",
    orderRead = "order:read",
    orderWrite = "order:write",
    productRead = "product:read",
    productEdit = "product:edit",
    productWrite = "product:write",
    userReadDID = "user:read:did",
    userWriteDID = "user:write:did",
    userEditDID = "user:edit:did",
    userDeleteDID = "user:delete:did"
}
export declare const permissionHierarchy: {
    super_admin: Permission[];
    admin: Permission[];
    user_admin: Permission[];
    nft_admin: Permission[];
    did_admin: Permission[];
    user_all: Permission[];
    user_info: Permission[];
    order_info: Permission[];
    product_info: Permission[];
    user_did: Permission[];
};
