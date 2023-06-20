// user.adapter.ts
export interface User {
    id: string;
    username: string;
    password: string;
  }

export interface UserAdapter {
    authenticate(username: string, password: string): Promise<{token: string}| null>;
    }