import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsString, IsArray } from 'class-validator';
// import { GetDidDomainsDto } from '../../did-domains/dto/getDidDomains.dto';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

export class SignUpWithGeneratedApiKeyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
}

export class SignUpWithGeneratedPasswordDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  expiresAt: Date;
}

export class SignUpWithGeneratedAPIDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
}

export class SignUpWithMultipleGeneratedPasswordDto {
  @IsArray({})
  @IsNotEmpty()
  @ApiProperty()
  usernames: string[];
}

export class SignUpResponse {
  @ApiProperty()
  id: string;
}

export class SignUpWithGeneratedApiKeyResponse {
  @ApiProperty()
  id: string;
  @ApiProperty()
  apikey: string;
}

export class signUpMultipleWithGeneratedPasswordResponse {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
