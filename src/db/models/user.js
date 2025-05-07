import { typeList } from '../../constants/index.js';
import { model, Schema } from 'mongoose';

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
      },
      email: {
        type: String,
      },
      password: {
        type: String,
        required: true,
      },
    }
  );

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UserCollection = model('user', userSchema);
