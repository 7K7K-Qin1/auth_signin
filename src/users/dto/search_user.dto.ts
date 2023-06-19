export class SearchUserDto {
  id: string;
  name: string;

  static fromJSON(data: any): SearchUserDto {
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
