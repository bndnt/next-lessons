export interface User {
  id: string;
  email: string;
  userName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
export interface RegisterPayload {
  userName: string;
  email: string;
  password: string;
}

export interface CheckSessionResponse {
  success: boolean;
}
