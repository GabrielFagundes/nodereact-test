import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import { IRaceInputDTO } from '../../interfaces/IRace';
import RaceService from '../../services/race';
const route = Router();

export default (app: Router) => {

  app.use('/races', route);

  route.get(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger');
      logger.debug('Calling list races: %o')
      try {
        const raceServiceInstance = Container.get(RaceService);
        const races = await raceServiceInstance.GetRaces();
        return res.json(races).status(200);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    }
  );

  route.get(
    '/:raceId',
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger');
      logger.debug('Calling individual race: %o')
      try {
        const raceServiceInstance = Container.get(RaceService);
        const races = await raceServiceInstance.GetRaceById(req.params.raceId);
        return res.json(races).status(200);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    }
  );


  app.use('/admin/races', route);
  route.post(
    '/createrace',
    middlewares.isAuth,
    celebrate({
      body: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        raceDate: Joi.date().required(),
        category: Joi.string().required(),
        place: Joi.string().required()
      }),
    }),

    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger');
      logger.debug('Calling createrace endpoint with body: %o', req.body)
      try {
        const raceServiceInstance = Container.get(RaceService);
        const race = await raceServiceInstance.CreateRace(req.body as IRaceInputDTO);
        return res.json(race).status(200);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    }
  );

  route.delete(
    '/:raceId',
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger');
      logger.debug('Calling race delete: %o', req.params)
      try {
        const raceServiceInstance = Container.get(RaceService);
        const races = await raceServiceInstance.RemoveRace(req.params.raceId);
        return res.json(races).status(200);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    }
  );

  route.get(
    '/:raceId/users',
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger');
      logger.debug('Calling users from race: %o', req.params)
      try {
        const raceServiceInstance = Container.get(RaceService);
        const users = await raceServiceInstance.GetUsersByRaceId(req.params.raceId);
        return res.json(users).status(200);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    }
  )

};
