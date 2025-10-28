export default interface IUser {
  email: string;
  role: 'admin' | 'user';
  name: string;
  refreshToken: string;
  accessToken: string;
}
