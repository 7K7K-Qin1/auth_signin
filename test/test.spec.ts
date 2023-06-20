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
    const username = 'Tom QIN';
    const password = 'password';

    const result = await userAdapter.authenticate(username, password);

    expect(result).to.deep.equal({ token: 'token' });
  });

  it('should return null for invalid credentials', async () => {
    const username = 'Tom QIN';
    const password = 'incorrect_password';

    const result = await userAdapter.authenticate(username, password);

    expect(result).to.be.null;
  });
});
