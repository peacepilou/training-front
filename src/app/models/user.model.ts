// POST /auth/login : la preuve, et le prénom pour dire bonjour
export type LoginResponse = {
  id: number;
  username: string;
  firstName: string;
  accessToken: string;
  refreshToken: string;
};

// GET /auth/me : la personne connectée
export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};
