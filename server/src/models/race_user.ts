import * as mongoose from 'mongoose';
import { IRace_User } from '../interfaces/IRace_User';

const Race_User = new mongoose.Schema(
  {
    race: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Race',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IRace_User & mongoose.Document>('Race_User', Race_User);
