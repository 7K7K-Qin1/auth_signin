import * as fs from "fs";
import * as yaml from 'js-yaml';

export class Permission {
  name: string;
  description: string;
  parent?: Permission;
  children?: Permission[];

  constructor(name: string, description: string, parent?: Permission) {
    this.name = name;
    this.description = description;
    this.parent = parent;
    if (parent) {
      parent.addChild(this);
    }
    this.children = [];
  }

  addChild(permission: Permission) {
    this.children.push(permission);
  }

  hasPermission(permission: Permission): boolean {
    if (this.name === permission.name) {
      return true;
    }
    if (this.children.length > 0) {
      return this.children.some((child) => child.hasPermission(permission));
    }
    return false;
  }
}

// 从yaml文件读取内容
export function readYamlFile(path: string) {
  try {
    const fileContents = fs.readFileSync(path, 'utf8');
     const data = yaml.load(fileContents);
     return data[0]
  } catch (e) {
    console.log(e);
  }
}

// check following code equal to the code in permission.def.yaml
export function checkSame(root: Permission, data: any) {
   do {
    // check the name
    if (root.name !== data['role']['name']) {
      return false;
    }
    for (let i = 0; i < root.children.length; i++) {
      if (!checkSame(root.children[i],data['role']['children'][i])) {
        return false;
      }
    }
    return true;
  } while (root.children.length > 0);
}

export const superAdmin = new Permission('superAdmin', '超级管理员');
const admin = new Permission('admin', '管理员', superAdmin);
const userAll = new Permission('userAll', '用户全部权限', superAdmin);

// // 1. 用户权限
// // 1.0 用户权限总览
// const userInfo = new Permission('userInfo', '个人信息权限', userAll);
// const orderInfo = new Permission('orderInfo', '用户交易权限', userAll);
// const productInfo = new Permission('productInfo', '商户管理权限', userAll);
// const userDID = new Permission('userDID', '用户DID权限', userAll);
//
// // 1.1 个人信息权限
// const userRead = new Permission('userRead', '用户读取权限', userInfo);
// const userWrite = new Permission('userWrite', '用户写入权限', userInfo);
// const userEdit = new Permission('userEdit', '用户编辑权限', userInfo);
//
// // 1.2 用户交易权限
// const orderitemRead = new Permission(
//   'nftRead',
//   'NFT详细信息查看权限',
//   orderInfo,
// );
// const orderRead = new Permission('nftWrite', 'NFT订单查看权限', orderInfo);
// const orderWrite = new Permission('nftEdit', 'NFT编辑权限', orderInfo);
//
// // 1.3 商户管理权限
// const nftRead = new Permission('nftRead', 'NFT读取权限', userAll);
// const nftWrite = new Permission('nftWrite', 'NFT写入权限', userAll);
// const nftEdit = new Permission('nftEdit', 'NFT编辑权限', userAll);
// const nftDrop = new Permission('nftEdit', 'NFT空投权限', userAll);
//
// // 1.4 用户DID权限
// const didRead = new Permission('didRead', 'DID读取权限', userAll);
// const didWrite = new Permission('didWrite', 'DID写入权限', userAll);
// const didEdit = new Permission('didEdit', 'DID编辑权限', userAll);
// const didDelete = new Permission('didDelete', 'DID删除权限', userAll);
//
// // 2. 管理员权限
// // 2.0 管理员权限总览
// const userAdmin = new Permission('userAdmin', '用户管理权限', admin);
// const nftAdmin = new Permission('userAdmin', '用户管理权限', admin);
// const didAdmin = new Permission('userAdmin', '用户管理权限', admin);
//
// // 2.1 用户管理权限
// const readUser = new Permission('readUser', '读取用户权限', userAdmin);
// const writeUser = new Permission('writeUser', '写入用户权限', userAdmin);
// const editUser = new Permission('editUser', '编辑用户权限', userAdmin);
// const deleteUser = new Permission('deleteUser', '删除用户权限', userAdmin);
//
// // 2.2 NFT管理权限
// const readNFT = new Permission('readNFT', '读取NFT权限', nftAdmin);
// const writeNFT = new Permission('writeNFT', '写入NFT权限', nftAdmin);
// const editNFT = new Permission('editNFT', '编辑NFT权限', nftAdmin);
//
// // 2.3 DID管理权限
// const adminReadDID = new Permission(
//   'adminReadDID',
//   '管理读取DID权限',
//   didAdmin,
// );
// const adminWriteDID = new Permission(
//   'adminWriteDID',
//   '管理写入DID权限',
//   didAdmin,
// );
// const adminEditDID = new Permission(
//   'adminEditDID',
//   '管理编辑DID权限',
//   didAdmin,
// );
// const adminDeleteDID = new Permission(
//   'adminDeleteDID',
//   '管理删除DID权限',
//   didAdmin,
// );
