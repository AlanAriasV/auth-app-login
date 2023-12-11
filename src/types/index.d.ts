export interface Response {
  status: number;
  message?: string;
  data?: any;
}

export interface Body {
  [key: string]: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
}
