import { User } from '@/interfaces/user';
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    require: [true, 'The email is required']
  },
  userName: {
    type: String,
    require: [true, 'The userName is required'],
    unique: true
  },
  image: {
    type: String,
    require: [true, 'The image is required']
  }
});

UserSchema.methods.toJSON = function() {
  let {__v, ...user } = this.toObject();
  return user;
}

const User = models['User'] ? model<User>('User') : model<User>('User', UserSchema);

export default User;
