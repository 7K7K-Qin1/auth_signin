// import { Test } from '@nestjs/testing';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtAuthModule } from '../src/jwt.module';
// import { JwtConfig } from '../src/jwt.config';
// import { UserAdapter , User } from '../src/user.adapter';
// import { JwtStrategy } from '../src/jwt.strategy';
// import { expect } from 'jest';

// // 创建一个 mock UserAdapter 实现
// class MockUserAdapter implements UserAdapter {
//   authenticate(username: string, password: string): Promise<User & { token: string }> {
//     const user: User & { token: string } = {
//       id: '123',
//       username: 'john_doe',
//       password: '********', // 设置一个固定的默认密码
//       access_token: 'token',
//     };
//     return Promise.resolve(user);
//   }
// }



// describe('JwtAuthModule', () => {
//   let userAdapter: UserAdapter;

//   beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [
//         PassportModule.register({ defaultStrategy: 'jwt' }),
//         JwtModule.register({
//           secret: 'secretKey',
//           signOptions: {
//             expiresIn: '1h',
//             issuer: 'example.com',
//             audience: 'example.com',
//           },
//         }),
//         JwtAuthModule.register(MockUserAdapter, {
//           secretOrPrivateKey: 'secretKey',
//           expiresIn: '1h',
//           issuer: 'example.com',
//           audience: 'example.com',
//         }),
//       ],
//     }).compile();

//     userAdapter = moduleRef.get<UserAdapter>('UserAdapter');
//   });

//   describe('UserAdapter', () => {
//     it('should authenticate user and return access token', async () => {
//       const mockUsername = 'testuser';
//       const mockPassword = 'testpassword';

//       const result = await userAdapter.authenticate(mockUsername, mockPassword);

//       expect(result).toBeDefined();
//       expect(result.access_token).toBe('mockAccessToken');
//     });
//   });

//   describe('JwtStrategy', () => {
//     let jwtStrategy: JwtStrategy;

//     beforeEach(async () => {
//       const moduleRef = await Test.createTestingModule({
//         imports: [
//           PassportModule.register({ defaultStrategy: 'jwt' }),
//           JwtModule.register({
//             secret: 'secretKey',
//             signOptions: {
//               expiresIn: '1h',
//               issuer: 'example.com',
//               audience: 'example.com',
//             },
//           }),
//         ],
//         providers: [JwtStrategy, { provide: 'UserAdapter', useClass: MockUserAdapter }],
//       }).compile();

//       jwtStrategy = moduleRef.get<JwtStrategy>(JwtStrategy);
//     });

//     it('should validate user and return user object when a valid JWT token is provided', async () => {
//       const mockPayload = { sub: '123' };

//       const result = await jwtStrategy.validate(mockPayload);

//       expect(result).toBeDefined();
//       expect(result.id).toBe('123');
//     });

//     it('should validate user and return null when an invalid JWT token is provided', async () => {
//       const mockPayload = { sub: '456' };

//       const result = await jwtStrategy.validate(mockPayload);

//       expect(result).toBeNull();
//     });
//   });
// });
import { UserAdapter } from '../src/user.adapter';
import { MockUserAdapter } from './mock.user.adapter';
import { chai } from 'chai';
import { expect } from 'chai';

describe('UserAdapter', () => {
  let userAdapter: UserAdapter;

  beforeEach(() => {
    userAdapter = new MockUserAdapter();
  });

  it('should authenticate user with valid credentials', async () => {
    const username = 'john_doe';
    const password = 'password';

    const result = await userAdapter.authenticate(username, password);

    expect(result).to.deep.equal({ token: 'token' });
  });

  it('should return null for invalid credentials', async () => {
    const username = 'john_doe';
    const password = 'incorrect_password';

    const result = await userAdapter.authenticate(username, password);

    expect(result).to.be.null;
  });
});
