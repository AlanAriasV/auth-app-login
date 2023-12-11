import { Router } from 'express';

import { UserController } from '@/src/controllers';
import { Response } from '@/src/types';
import { generateToken } from '@/src/common';
// import { COOKIE_OPTIONS } from '@/src/utils/constants';

const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  const body = req.body;

  if (!body.email || !body.password) {
    return res.status(400).json({
      message: 'Missing required fields',
    });
  }

  const {
    status,
    data: user,
    message,
  }: Response = await UserController.login(body);

  if (status === 200) {
    const token = generateToken(user);

    // res.cookie('token', token, COOKIE_OPTIONS);

    return res.status(status).json({ ...user, token });
  }

  res.status(status).json({ message });
});

loginRouter.get('/re-validate', async (req, res) => {
  const { userID } = req.query;
  const id = +userID!;
  const {
    status,
    message,
    data: user,
  } = await UserController.getUserById({ id });

  if (status === 200) {
    return res.status(status).json({ ...user });
  }

  res.status(status).json({ message });
});

export default loginRouter;
