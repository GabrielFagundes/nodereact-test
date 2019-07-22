import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import { Container } from 'typedi';
import RaceService from '../../services/race';
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
    return res.json({ user: req.currentUser }).status(200);
  });

  route.post('/apply/:raceId', middlewares.isAuth, middlewares.attachCurrentUser, async (req: Request, res: Response, next: NextFunction) => {
    const logger = Container.get('logger');
    logger.debug('Calling apply to race: %o')

    try {
      const raceServiceInstance = Container.get(RaceService);
      const race = await raceServiceInstance.ApplyToRace(req.params.raceId, req.currentUser._id);
      return res.json(race).status(200);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      return next(e);
    }

  })
}