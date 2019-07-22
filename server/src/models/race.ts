import { IRace } from '../interfaces/IRace';
import * as mongoose from 'mongoose';

const Race = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },

    description: {
      type: String,
      required: true,
      index: true,
    },

    place: {
      type: String,
      required: true,
    },

    raceDate: {
      type: Date,
      default: Date.now,
      required: true
    },

    category: {
      type: String,
      required: true,
      index: true
    }
  },
  { timestamps: true },
);

export default mongoose.model<IRace & mongoose.Document>('Race', Race);
