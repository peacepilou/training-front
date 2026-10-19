// POST /auth/login : la preuve, et le prénom pour dire bonjour
export type LoginResponse = {
  id: number;
  username: string;
  firstName: string;
  accessToken: string;
  refreshToken: string;
};
