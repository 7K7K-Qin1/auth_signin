"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superAdmin = exports.checkSame = exports.readYamlFile = exports.Permission = void 0;
const fs = require("fs");
const yaml = require("js-yaml");
class Permission {
    constructor(name, description, parent) {
        this.name = name;
        this.description = description;
        this.parent = parent;
        if (parent) {
            parent.addChild(this);
        }
        this.children = [];
    }
    addChild(permission) {
        this.children.push(permission);
    }
    hasPermission(permission) {
        if (this.name === permission.name) {
            return true;
        }
        if (this.children.length > 0) {
            return this.children.some((child) => child.hasPermission(permission));
        }
        return false;
    }
}
exports.Permission = Permission;
function readYamlFile(path) {
    try {
        const fileContents = fs.readFileSync(path, 'utf8');
        const data = yaml.load(fileContents);
        return data[0];
    }
    catch (e) {
        console.log(e);
    }
}
exports.readYamlFile = readYamlFile;
function checkSame(root, data) {
    do {
        if (root.name !== data['role']['name']) {
            return false;
        }
        for (let i = 0; i < root.children.length; i++) {
            if (!checkSame(root.children[i], data['role']['children'][i])) {
                return false;
            }
        }
        return true;
    } while (root.children.length > 0);
}
exports.checkSame = checkSame;
exports.superAdmin = new Permission('superAdmin', '超级管理员');
const admin = new Permission('admin', '管理员', exports.superAdmin);
const userAll = new Permission('userAll', '用户全部权限', exports.superAdmin);
//# sourceMappingURL=permission.enum_v2.js.map