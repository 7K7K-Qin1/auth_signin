export declare class Permission {
    name: string;
    description: string;
    parent?: Permission;
    children?: Permission[];
    constructor(name: string, description: string, parent?: Permission);
    addChild(permission: Permission): void;
    hasPermission(permission: Permission): boolean;
}
export declare function readYamlFile(path: string): any;
export declare function checkSame(root: Permission, data: any): boolean;
export declare const superAdmin: Permission;
