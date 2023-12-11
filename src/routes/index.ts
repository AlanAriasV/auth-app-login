import loginRouter from './login';

import { Router } from 'express';

const apiRouter = Router();

apiRouter.use('/login', loginRouter);

export default apiRouter;
