export class LoginResponse {
  message: string;
  uid: string;
  username: string;
  token: string;
  role: 'admin' | 'user';
}
