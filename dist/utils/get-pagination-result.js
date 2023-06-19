"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePaginationResult = exports.ApiOkResponsePaginated = exports.GetPaginationResult = void 0;
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("../config");
const common_1 = require("@nestjs/common");
class GetPaginationResult {
}
exports.GetPaginationResult = GetPaginationResult;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The total number of items',
    }),
    __metadata("design:type", Number)
], GetPaginationResult.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The total number of pages',
    }),
    __metadata("design:type", Number)
], GetPaginationResult.prototype, "totalPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The current page number',
    }),
    __metadata("design:type", Number)
], GetPaginationResult.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of items per page',
    }),
    __metadata("design:type", Number)
], GetPaginationResult.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The items',
    }),
    __metadata("design:type", Array)
], GetPaginationResult.prototype, "items", void 0);
const ApiOkResponsePaginated = (dataDto) => (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(GetPaginationResult, dataDto), (0, swagger_1.ApiOkResponse)({
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(GetPaginationResult) },
            {
                properties: {
                    items: {
                        type: 'array',
                        items: { $ref: (0, swagger_1.getSchemaPath)(dataDto) },
                    },
                },
            },
        ],
    },
}));
exports.ApiOkResponsePaginated = ApiOkResponsePaginated;
function generatePaginationResult(params) {
    const pageSize = params.pageSize || config_1.Config.pageSize;
    const totalPage = Math.ceil(params.total / pageSize);
    if (params.page < 1) {
        throw new common_1.BadRequestException('Page must be greater than 0');
    }
    return {
        total: params.total,
        totalPage,
        page: params.page,
        pageSize,
        items: params.items,
    };
}
exports.generatePaginationResult = generatePaginationResult;
//# sourceMappingURL=get-pagination-result.js.map