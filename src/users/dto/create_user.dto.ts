import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'User name',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'User password',
  })
  password?: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'api key of user',
  })
  apikey?: string;
}

export class CreateMultipleUsersDto {
  @IsArray()
  @IsString({ each: true })
  @MinLength(1, { each: true })
  @ArrayMinSize(1)
  names: string[];
}
