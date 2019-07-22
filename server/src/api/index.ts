import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import race from './routes/race';

const app = Router();
auth(app);
user(app);
race(app);

export default app;
