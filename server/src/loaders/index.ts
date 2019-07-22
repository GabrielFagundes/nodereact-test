import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';
export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  /**
   * Here we are injecting the mongoose models into the DI container.
   * This is controversial but will provide a lot of flexibility at the time
   * of writing unit tests
   */

  const userModel = {
    name: 'userModel',
    model: require('../models/user').default,
  };

  const raceModel = {
    name: 'raceModel',
    model: require('../models/race').default,
  };

  const race_userModel = {
    name: 'race_userModel',
    model: require('../models/race_user').default,
  };

  await dependencyInjectorLoader({
    mongoConnection,
    models: [
      userModel,
      raceModel,
      race_userModel
    ],
  });
  Logger.info('✌️ Dependency Injector loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
