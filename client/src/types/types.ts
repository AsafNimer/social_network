export interface RegistrationType {
  first: string;
  last: string;
  email: string;
  password?: string;
  error: boolean;
}

export interface LoginType {
  email: string;
  password?: string;
  error: boolean;
}
