import { sql } from '@vercel/postgres';

import { comparePassword } from '@/src/common';

import { User } from '@/src/types';

interface LoginProps {
  email: string;
  password: string;
}

export default class UserController {
  static async login({ email, password }: LoginProps) {
    try {
      const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`;

      if (!rows.length) {
        return {
          status: 404,
          message: 'User not found',
        };
      }

      const { password: hashedPassword, ...user } = rows[0];

      if (await comparePassword(password!, hashedPassword)) {
        return {
          status: 200,
          data: user as User,
        };
      }

      return {
        status: 401,
        message: 'Invalid password',
      };
    } catch (error: any) {
      return {
        status: 500,
        message: error.message,
      };
    }
  }

  static async getUserById({ id }: { id: number }) {
    try {
      const { rows } = await sql`SELECT * FROM users WHERE id = ${id}`;

      if (!rows.length) {
        return {
          status: 404,
          message: 'User not found',
        };
      }

      const { password: hashedPassword, ...user } = rows[0];

      return {
        status: 200,
        data: user as User,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: error.message,
      };
    }
  }
}
