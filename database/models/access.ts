import { User } from '@/interfaces/user';
import { Schema, model, models } from 'mongoose';
import { Access } from '../../interfaces/user';

const AccessSchema = new Schema({
  email: {
    type: String,
    unique: true,
    require: [true, 'The email is required']
  },
  accessGranted: {
    type: Boolean,
    default: false
  }
});

AccessSchema.methods.toJSON = function() {
  let {__v, ...access } = this.toObject();
  return access;
}

const Access = models['Access'] ? model<Access>('Access') : model<Access>('Access', AccessSchema);

export default Access;
