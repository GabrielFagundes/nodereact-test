import { Service } from 'typedi';
import { IUser } from '../interfaces/IUser';

@Service()
export default class MailerService {
  public SendWelcomeEmail(user: Partial<IUser>) {
    /**
     * @TODO Call Mailchimp/Sendgrid or whatever
     */
    return { delivered: 1, status: 'ok' };
  }

  public StartEmailSequence(sequence: string, user: Partial<IUser>) {
    if (!user.email) {
      throw new Error('No email provided');
    }
    // @TODO implement some email sequence.
    // For now, its here just as an example of how this service can be usefull
    return { delivered: 1, status: 'ok' };
  }
}
