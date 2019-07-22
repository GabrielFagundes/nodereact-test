import { Service, Inject } from 'typedi';
import { IRace, IRaceInputDTO } from '../interfaces/IRace';
import { IRace_User, IRace_UserDTO } from '../interfaces/IRace_User';
import { IUser } from '../interfaces/IUser';

@Service()
export default class RaceService {
  constructor(
    @Inject('raceModel') private raceModel,
    @Inject('race_userModel') private race_userModel,
    @Inject('logger') private logger,
  ) { }

  public async CreateRace(raceInputDTO: IRaceInputDTO): Promise<{ race: IRace; }> {
    try {
      const raceRecord = await this.raceModel.create({
        ...raceInputDTO
      });

      if (!raceRecord) {
        throw new Error('race cannot be created');
      }

      const race = raceRecord.toObject();

      return { race };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetRaces(): Promise<Array<IRace>> {
    try {
      const raceRecord = await this.raceModel.find();

      if (!raceRecord) {
        throw new Error('cannot list races');
      }

      return raceRecord;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetRaceById(id: string): Promise<IRace> {
    try {
      const raceRecord = await this.raceModel.findById(id);

      if (!raceRecord) {
        throw new Error('cannot find this race');
      }

      return raceRecord;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async RemoveRace(id: string): Promise<Object> {
    try {
      await this.race_userModel.deleteMany({ race: id });
      await this.raceModel.findByIdAndDelete(id);
      return {};
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async UpdateRace(id: string, raceInputDTO: IRaceInputDTO): Promise<{ race: IRace; }> {
    try {
      const raceRecord = await this.raceModel.findByIdAndUpdate(id, {
        ...raceInputDTO
      }, { new: true });

      if (!raceRecord) {
        throw new Error('race cannot be updated');
      }

      const race = raceRecord.toObject();
      return { race };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async ApplyToRace(race_id: string, user_id: string): Promise<Object> {
    try {
      const userApplied = await this.race_userModel.findOne({ user: user_id })

      if (userApplied) throw new Error('already applied for a race')

      const race_userRecord = await this.race_userModel.create({
        race: race_id,
        user: user_id,
      });

      if (!race_userRecord) {
        throw new Error('race cannot be created');
      }

      const race_user = race_userRecord.toObject();

      return race_user;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetUsersByRaceId(id: string): Promise<Array<IRace>> {
    try {
      const usersByRace = await this.race_userModel.find({ race: id }).populate('user');

      if (!usersByRace) {
        throw new Error('cannot find any user for this race');
      }

      return usersByRace;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

}
