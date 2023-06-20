import { UserAdapter } from '../src/user.adapter';

export class MockUserAdapter implements UserAdapter {
  async authenticate(username: string, password: string): Promise<{ token: string } | null> {
    // 在这里实现身份验证逻辑
    // 检查用户名和密码是否有效，并返回相应的结果

    // 这是一个示例，始终返回一个有效的 token
    const token = 'token';

    if (username === 'Tom QIN' && password === 'password') {
      return { token };
    } else {
      return null;
    }
  }
}
