// user.adapter.ts
export interface User {
    id: number;
    username: string;
    password: string;
    }

    
export interface UserAdapter {
    authenticate(username: string, password: string): Promise<User & {token: string}| null>;
    }