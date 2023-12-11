import { CookieOptions } from 'express';

export const COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  sameSite: 'none',
  secure: false,
  expires: new Date(Date.now() + 1000 * 60 * 60),
};
