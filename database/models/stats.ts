import { Stats } from '@/interfaces/stats';
import { Schema, model, models } from 'mongoose';

const StatsSchema = new Schema({
  playlistId: {
    type: String,
    require: [true, 'Playlist id is required']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A user is required']
  },
  bestScore: {
    type: Number,
    require: [true, 'A score is required']
  }
});

StatsSchema.methods.toJSON = function() {
  let {__v, ...stats } = this.toObject();
  return stats;
}

const Stats = models['Stats'] ? model<Stats>('Stats') : model<Stats>('Stats', StatsSchema);

export default Stats;
