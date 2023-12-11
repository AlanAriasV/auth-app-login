import jwt from 'jsonwebtoken';

import { User } from '../types';

export function generateToken(data: User) {
  const token = jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
}

// export function validateToken(token?: string) {
//   if (!token) {
//     return {
//       status: 401,
//       msg: 'Without token',
//     };
//   }

//   try {
//     jwt.verify(token, process.env.JWT_SECRET as string);

//     return {
//       status: 200,
//       token,
//     };
//   } catch {
//     return {
//       status: 401,
//       msg: 'Invalid token',
//     };
//   }
// }

// export function decodeToken(token: string) {
//   const result = jwt.decode(token) as User & { iat: number; exp: number };

//   return result;
// }
