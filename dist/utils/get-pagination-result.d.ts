import { Type } from '@nestjs/common';
export declare class GetPaginationResult<T> {
    total: number;
    totalPage: number;
    page: number;
    pageSize: number;
    items: T[];
}
export declare const ApiOkResponsePaginated: <DataDto extends Type<unknown>>(dataDto: DataDto) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export interface GetPaginationParams<T> {
    total: number;
    page: number;
    pageSize?: number;
    items: T[];
}
export declare function generatePaginationResult<T>(params: GetPaginationParams<T>): GetPaginationResult<T>;
