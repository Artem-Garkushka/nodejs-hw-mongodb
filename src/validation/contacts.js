/* eslint-disable no-undef */
import Joi from 'joi';

export const createContactSchema = Joi.object({
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('User id should be a valid mongo id');
    }
    return true;
  }),
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least 3 characters long',
    'string.max': 'Name should be at most 20 characters long',
    'string.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should be at least 10 characters long',
    'string.max': 'Phone number should be at most 15 characters long',
    'string.required': 'Phone number is required',
  }),
  email: Joi.string().min(3).max(20).email().messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should be at least 3 characters long',
    'string.max': 'Email should be at most 20 characters long',
    'string.email': 'Email should be a valid email address',
  }),
  isFavourite: Joi.boolean().truthy('true').falsy('false'),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'Contact type should be a string',
      'string.min': 'Contact type should be at least 3 characters long',
      'string.max': 'Contact type should be at most 20 characters long',
      'string.valid': 'Contact type should be "work", "home" or "personal"',
      'string.required': 'Contact type is required',
    }),
});

export const updateContactSchema = Joi.object({
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('User id should be a valid mongo id');
    }
    return true;
  }),
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least 3 characters long',
    'string.max': 'Name should be at most 20 characters long',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should be at least 10 characters long',
    'string.max': 'Phone number should be at most 15 characters long',
  }),
  email: Joi.string().min(3).max(20).email().messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should be at least 3 characters long',
    'string.max': 'Email should be at most 20 characters long',
    'string.email': 'Email should be a valid email address',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact type should be a string',
    'string.valid': 'Contact type should be "work", "home" or "personal"',
  }),
});
