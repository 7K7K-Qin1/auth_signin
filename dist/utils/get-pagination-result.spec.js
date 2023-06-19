"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_pagination_result_1 = require("./get-pagination-result");
const config_1 = require("../config");
const common_1 = require("@nestjs/common");
describe('Test get-pagination-result', () => {
    it('test generatePaginationResult', () => {
        const params = {
            pageSize: 1,
            total: 1,
            page: 2,
            items: [1],
        };
        const result = (0, get_pagination_result_1.generatePaginationResult)(params);
        expect(result).toStrictEqual({
            total: 1,
            totalPage: 1,
            page: 2,
            pageSize: 1,
            items: [1],
        });
    });
    it('test generatePaginationResult without pageSize', () => {
        const params = {
            total: 2,
            page: 1,
            items: [1],
        };
        const result = (0, get_pagination_result_1.generatePaginationResult)(params);
        expect(result).toStrictEqual({
            total: 2,
            totalPage: 1,
            page: 1,
            pageSize: config_1.Config.pageSize,
            items: [1],
        });
    });
    it('test generatePaginationResult with multiple pages', () => {
        const params = {
            total: 10,
            pageSize: 2,
            page: 1,
            items: [1],
        };
        const result = (0, get_pagination_result_1.generatePaginationResult)(params);
        expect(result).toStrictEqual({
            total: 10,
            totalPage: 5,
            page: 1,
            pageSize: 2,
            items: [1],
        });
    });
    it('test generatePaginationResult with page < 1', () => {
        const params = {
            total: 10,
            pageSize: 2,
            page: 0,
            items: [1],
        };
        expect(() => (0, get_pagination_result_1.generatePaginationResult)(params)).toThrowError(common_1.BadRequestException);
    });
});
//# sourceMappingURL=get-pagination-result.spec.js.map