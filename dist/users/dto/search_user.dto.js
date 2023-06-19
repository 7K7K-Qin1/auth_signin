"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUserDto = void 0;
class SearchUserDto {
    static fromJSON(data) {
        const dto = new SearchUserDto();
        if ('name' in data) {
            dto.name = data.name;
        }
        if ('id' in data) {
            dto.id = data.id;
        }
        return dto;
    }
}
exports.SearchUserDto = SearchUserDto;
//# sourceMappingURL=search_user.dto.js.map