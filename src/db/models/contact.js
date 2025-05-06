import { typeList } from '../../constants/index.js';
import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
      required: true,
    },
    contactType: {
      type: String,
      enum: typeList,
      required: true,
      default: typeList[0],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    photo: {
      type: String,
      required: false,
      default: null,
    },
  },
  { versionKey: false, timestamps: true },
);

export const ContactsCollection = model('contact', contactSchema);
