import {
  Req,
  Body,
  Controller,
  Options,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
// import { RequiredPermissions } from '../permission/permission.decorator';
// import { RequestWithUser } from '../utils/users';
// import { Permission } from '../permission/permission.enum';
// import { PermissionsGuard } from '../permission/permission.guard';
// import { CreateMultipleUsersDto } from '../users/dto/create_user.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ResetPasswordResponse } from './dto/reset.dto';
import { SignInDto, SignInResponse } from './dto/signIn.dto';
import {
  SignUpDto,
  SignUpResponse,
  signUpMultipleWithGeneratedPasswordResponse,
  SignUpWithGeneratedApiKeyDto,
  SignUpWithMultipleGeneratedPasswordDto,
  SignUpWithGeneratedAPIDto,
  SignUpWithGeneratedApiKeyResponse,
  SignUpWithGeneratedPasswordDto,
} from './dto/signUp.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Options('signUp')
  @Options('signUp/generate')
  @Options('signUp/multiple/generate')
  @Options('signIn')
  @Options('resetPassword/:username')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Check if user has permission' })
  /**
   * This function will return the whether the user has permission to access the endpoint
   */
  signUpOptions() {
    return {
      allowMethods: ['POST', 'OPTIONS', 'PATCH', 'GET'],
    };
  }

  // @Post('signUp')
  // @UseGuards(AuthGuard)
  // @ApiOkResponse({
  //   description:
  //     'Sign up with username and password. Note that only admin can sign up new users for now.',
  // })
  // @ApiOperation({ summary: 'Sign up with username and password' })
  // @ApiBearerAuth('admin')
  // signUp(
  //   @Body() body: SignUpDto,
  //   @Req() user: RequestWithUser,
  // ): Promise<SignUpResponse> {
  //   // sign up for user
  //   const res = this.authService.signUp(body, user.user.id);
  //   return res;
  // }

  // @Post('signUp/apiKey')
  // @UseGuards(AuthGuard)
  // @ApiOkResponse({
  //   description:
  //     'Sign up with username and generated API key. Note that only admin can sign up new users for now.',
  // })
  // @ApiOperation({
  //   summary:
  //     'Sign up with username and generated API key. Note that the API key will only be seen once',
  // })
  // signUpWithGeneratedApiKey(
  //   @Body() body: SignUpWithGeneratedAPIDto,
  //   @Req() user: RequestWithUser,
  // ): Promise<SignUpWithGeneratedApiKeyResponse> {
  //   return this.authService.signUpUserWithApiKey(body, user.user.id);
  // }

  // @Post('signUp/generate')
  // @UseGuards(AuthGuard)
  // @ApiOkResponse({
  //   description:
  //     'Sign up with username and generated password. Note that only admin can sign up new users for now.',
  // })
  // @ApiOperation({ summary: 'Sign up with username and generated password' })
  // @ApiBearerAuth('admin')
  // signUpWithGeneratedPassword(
  //   @Req() user: RequestWithUser,
  //   @Body() body: SignUpWithGeneratedPasswordDto,
  // ): Promise<SignUpResponse> {
  //   return this.authService.signUpWithGeneratedPassword(body, user.user.id);
  // }

  // @Post('signUp/multiple/generate')
  // @UseGuards(AuthGuard)
  // @ApiOkResponse({
  //   description:
  //     'Sign up with multiple usernames and generated password. Note that only admin can sign up new users for now.',
  // })
  // @ApiOperation({
  //   summary: 'Sign up with multiple usernames and generated password',
  // })
  // @ApiBearerAuth('admin')
  // async createMultiple(
  //   @Body() body: SignUpWithMultipleGeneratedPasswordDto,
  //   @Req() user: RequestWithUser,
  // ): Promise<signUpMultipleWithGeneratedPasswordResponse[]> {
  //   return this.authService.signUpMultipleWithGeneratedPassword(
  //     body,
  //     user.user.id,
  //   );
  // }

  @Post('signIn')
  @ApiOkResponse({
    description: 'Sign in with username and password',
    type: SignInResponse,
  })
  @ApiOperation({ summary: 'Sign in with username and password' })
  @ApiBearerAuth('admin')
  signIn(@Body() body: SignInDto): Promise<SignInResponse> {
    return this.authService.signIn(body.username, body.password);
  }

  // @Patch('resetPassword/:name')
  // @UseGuards(AuthGuard)
  // @ApiOkResponse({
  //   description: 'Reset password for user',
  // })
  // @ApiOperation({ summary: 'Reset password for user' })
  // @ApiBearerAuth('admin')
  // resetPassword(@Param('name') name: string): Promise<ResetPasswordResponse> {
  //   return this.authService.resetPasswordForUser(name);
  // }
}
